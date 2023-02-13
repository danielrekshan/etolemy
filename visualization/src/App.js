import './App.css';
import * as Tone from 'tone'
import * as React from 'react'
import sprite from './data/sprite.png'
import key_image from './data/key.jpg'
import key_image2 from './data/key2.jpg'
import logo from './data/logo-earthrise.png'
import pulse_data from './data/pulses.json'
import dialog from './data/dialog.json'
import audio from './data/muap.mp3';


const pulses = pulse_data.map((p) => {
  return {
    frame_number: parseInt(p.field1),
    start_frame: parseInt(p.start_frame),
    peak_frame: parseInt(p.peak_frame),
    end_frame: parseInt(p.end_frame),
    duration: parseInt(p.duration),
    prev_interval: parseInt(p.prev_interval),
    next_interval: parseInt(p.next_interval),
    peak_brightness: parseFloat(p.peak_brightness),
    ratios: p.ratios,
    ratios_count: parseInt(p.ratios_count)
  }
})

const player = new Tone.Player(audio).toDestination();

const synth = new Tone.Synth().toDestination();
function pulse_to_title(pulse) {
  // return ""
  var ratios = []
  if (pulse.ratios.match("1.")) {
    ratios.push("1.0")
  }
  if (pulse.ratios.match(".5")) {
    ratios.push("0.5")
  }
  if (pulse.ratios.match(".32")) {
    ratios.push("0.32")
  }
  if (pulse.ratios.match(".18")) {
    ratios.push("0.18")
  }
  var t = [
    "Pulse Number:\n  " + parseFloat(pulse.frame_number) +12,
    "Peak Frame:\n  " + pulse.peak_frame,
    "Peak Brightness:\n  " + Math.round(parseFloat(pulse.peak_brightness)*11000 * 100) / 100,
    "Pulse Duration:\n  " + pulse.duration,
    "Previous Pulse:\n  " + pulse.prev_interval,
    "Next Pulse:\n  " + pulse.next_interval,
  ]
  if (ratios.length > 0) {
    t.push("Ratios:\n  " + ratios.join(", "))
  }
  return t.join("\n\n")
}
let intervalId
let notes = {}
for (var i in pulses) {
  let pulse = pulses[i]
    notes[pulse.peak_frame] = {
    duration: pulse.duration,
    brightness: pulse.peak_brightness
  }
}
let scale_x = 1
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animating: false,
      frame_rate: 33.8,
      current_frame: 0,
      intervalId: false,
      synth: false,
      last_seek: 0,
      player: false,
      start_time: false
      // osc: new Tone.Oscillator(440, "sine").toDestination()
    };

    // This binding is necessary to make `this` work in the callback
    this.pauseAnimation = this.pauseAnimation.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);



  }

  seekTo(time){
    if (time !== this.state.last_seek) {
      player.seek(time)

      this.setState({
        last_seek: time
      }, function() {
  
      })
    }


  }

  toggleAnimation() {
    if (this.state.animating) {
      this.pauseAnimation()
    } else {
      this.startAnimation()
    }
  }
  startAnimation() {
    let frame_rate = this.state.frame_rate
    let intervalId = setInterval(() => {
      if (this.state.current_frame + 1 > 9200) {
        this.pauseAnimation()
      }
      this.setState(prevState => {
        return {
          current_frame: prevState.current_frame + 1,
        };
      });
    },  this.state.frame_rate );

    this.setState({ intervalId: intervalId, animating: true, start_time: new Date() })
  }
  pauseAnimation() {
    player.stop()   
    clearInterval(this.state.intervalId);
    this.setState({  animating: false })
  }
  resetAnimation() {
    player.stop()
    clearInterval(this.state.intervalId);
    this.setState({current_frame: 0, animating: false})
    window.scrollTo(0,0)
  }

  componentDidMount() {
    // var player = new Tone.Player(audio).toDestination();
    this.setState({player: player})
  }
  componentWillUnmount() {
    clearInterval(intervalId);
  }



  
  render() {

    if (notes[this.state.current_frame]) {
      try {
        let note = notes[this.state.current_frame]
        
        synth.triggerAttackRelease(`${note.brightness*11000 * 432}`, `+${note.duration/30}`, `0`)
        // this.seekTo( this.state.current_frame/this.state.frame_rate )

      } catch (error) {
        console.log("error: ", error)
      }

    }

    let scale_y = 23
    var circles = []
    var bars = []
    let intervals = []
    let pulse_intervals = []
    let dots = pulses.map((pulse, i) => {
      let visibility = "visible"
      if (pulse.peak_frame - this.state.current_frame  > 1000 || this.state.current_frame - pulse  > 1000) {
        // visibility = "hidden"
      }
      if (pulse.ratios_count > 3) {
        if (pulse.ratios.match("1.")) {
          pulse_intervals.push(<div className="dot interval"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.04,
              visibility: visibility,
              zIndex: 1,
              height: scale_y,
              width: 244.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - (244.5 * scale_x),
              top: 0
            }}></div>)

          circles.push((<div className="dot circle"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.06,
              borderRadius: 1000,
              zIndex: 1,
              visibility: visibility,
              height: 244.5 * scale_x * 2,
              width: 244.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - (244.5 * scale_x),

            }}></div>))
        }
        if (pulse.ratios.match("0.5")) {
          pulse_intervals.push(<div className="dot interval"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.06,
              zIndex: 1,
              visibility: visibility,
              height: scale_y,
              width: 122.5* scale_x * 2,
              left: pulse.peak_frame * scale_x - 122.5 * scale_x,
              backgroundColor: 'orange',
              top: scale_y 
            }}></div>)
          circles.push((<div className="dot circle"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.25,
              visibility: visibility,
              borderRadius: 1000,
              zIndex: 2,
              height: 122.5 * scale_x * 2,
              width: 122.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - (122.5 * scale_x),
              backgroundColor: 'orange',
            }}></div>))
        }
        if (pulse.ratios.match("0.32")) {
          pulse_intervals.push(<div className="dot interval"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.25,
              visibility: visibility,
              zIndex: 1,
              height: scale_y,
              backgroundColor: 'green',
              width: 78.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - 78.5 * scale_x,
              top: scale_y * 2
            }}></div>)
          circles.push((<div className="dot circle"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.25,
              borderRadius: 1000,
              visibility: visibility,
              zIndex: 3,
              backgroundColor: 'green',
              height: 78.5 * scale_x * 2,
              width: 78.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - (78.5 * scale_x)
            }}></div>))
        }
        if (pulse.ratios.match("0.18")) {
          pulse_intervals.push(<div className="dot interval"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.25,
              visibility: visibility,
              zIndex: 1,
              height: scale_y,
              backgroundColor: 'blue',
              width: 44.5 * scale_x * 2,
              left: pulse.peak_frame * scale_x - 44.5 * scale_x,
              top: scale_y * 3
            }}></div>)
          circles.push((<div className="dot circle"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.25,
              visibility: visibility,
              borderRadius: 1000,
              zIndex: 4,
              backgroundColor: 'blue',
              border: '2px solid darkblue',
              height: (44.5) * scale_x * 2,
              width: (44.5) * scale_x * 2,
              left: (pulse.peak_frame) * scale_x - ((44.5) * scale_x)
            }}></div>))
        }
        if (pulse.ratios.match("0.13")) {
          pulse_intervals.push(<div className="dot interval"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.2,
              visibility: visibility,
              zIndex: 1,
              height: scale_y,
              backgroundColor: 'purple',
              width: 33.5 * scale_x * 2,
              left: (pulse.peak_frame) * scale_x - 33.5 * scale_x,
              top: scale_y * 4
            }}></div>)
          circles.push((<div className="dot circle"
            title={pulse_to_title(pulse)}
            style={{
              opacity: 0.2,
              zIndex: 5,
              visibility: visibility,
              borderRadius: 1000,
              backgroundColor: 'purple',
              height: (33.5) * scale_x * 2,
              width: (33.5) * scale_x * 2,
              left: (pulse.peak_frame) * scale_x - ((33.5) * scale_x)
            }}></div>))
        }
      }

      bars.push(
        (<div className="dot bar" title={pulse_to_title(pulse)} style={{
          opacity: .5,
          zIndex: 100,
          visibility: visibility,
          height: (pulse.peak_brightness) * 1618033 * 1.618033,
          width: scale_x,
          left: (pulse.peak_frame + (pulse.duration) / 2) * scale_x - scale_x / 2,
          minWidth: 5,
          minHeight: 5,
        }}>
        </div>)
      )

      return (<div className="dot" title={pulse_to_title(pulse)} style={{
        opacity: .5,
        zIndex: 10000,
        borderRadius: 100,
        backgroundColor: 'black',
        border: "1px solid",
        visibility: visibility,
        height: (pulse.duration) * scale_x,
        width: (pulse.duration) * scale_x,
        left: (pulse.peak_frame - (pulse.duration) / 2) * scale_x,
        minWidth: 5,
        minHeight: 5
      }}>
      </div>)
    })
    let statements = dialog.map((statement) => {
      return (
        <div
          className={"statement " + statement.speaker}
          title={statement.speaker + ":\n   " + statement.words}
          style={{
            zIndex: 200,
            position: "absolute",
            width: statement.words.length * 9,
            left: parseFloat(statement.start) * scale_x * 30,
          }}
        ><strong>{statement.speaker}: </strong>{statement.words}</div>)
    })

    
    return (
      <div className={this.state.animating ? 'animating' : ''}>
        <div className={`intro1 ${this.state.current_frame > 50 ? 'hidden': ''}`}>
          <h1>Demonstration of Geometry with the Pulsations of a UAP</h1>
          <p>This is a representation of geometric pulsations of light derived from <a href="https://www.youtube.com/watch?v=alloPQFcoLw" target="_blank">
            footage captured by Rob Freeman</a> during a CE-5 event at the Monroe
            Institute in May 2022.</p>
            <p>Dave Palachik, Mufon Canada Director, filed <a href="https://www.youtube.com/watch?v=9BDwSa57EyM&t=175s" target="_blank">case #122866</a> that concluded the phenomenon may be categorized as UAP. CE-5 is the designation for human initiated contact experiences.  The voices include Dan B and Chris B, who are both experiencers of NHI contact associated with CE-5.
          </p>
          <p>This demonstration proves congruence between the pulsation and ruler-and-compass geometric construction, which may be proof of intentional and intelligent design of the signal.  The pulsation in the Youtube video was computationally analyzed frame-by-frame to produce this demonstration. </p>
          <p>
            The colored circles and bars represent the ratio between pulsations.  Ratios are represented only when the intervals are within 1% of geometric precision, which is typically 1-3 frames or 1/30th to 1/10th of a second. Each color represents a specific ratio:</p>
          <table>
            <thead><th>Color</th><th>Ratio</th><th>Description</th></thead>
            <tbody>
              <tr>
                <td style={{backgroundColor: 'red'}}>Red</td>
                <td>1.0</td>
                <td>Marked by discernable beats, nearly every pulsation relates to another in this ratio</td>
              </tr>
              <tr>
                <td style={{backgroundColor: 'orange'}}>Orange</td>
                <td>0.5</td>
                <td>Bisection of unity interval</td>
              </tr>
              <tr>
                <td style={{backgroundColor: 'green'}}>Green</td>
                <td>0.32</td>
                <td>0.5 ratio divided by golden section (approx) and sum of 0.13 and 0.18 ratios</td>
              </tr>
              <tr >
                <td style={{backgroundColor: 'blue'}}>Blue</td>
                <td>0.18</td>
                <td>0.32 ratio divided by golden section (approx)</td>
              </tr>
              <tr>
                <td style={{backgroundColor: 'violet'}}>Violet</td>
                <td>0.13</td>
                <td>0.18 ratio divided by golden section (approx)</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <strong>Ruler and compass key to x-axis intervals</strong>
          <div className='ruler_compass'>
          
          <img className="key_image" src={`${key_image}`} /><img className="key_image" src={`${key_image2}`} />
          </div>
        </div>
        <div className="center-line"/>
        <div className="controls">
          <button onClick={this.toggleAnimation}>
            {this.state.animating ? "Pause" : "Start"} 
          </button>

          <button onClick={this.resetAnimation}>
            Reset 
          </button>

          &nbsp;{this.state.current_frame} -&nbsp;
          {Math.round(( new Date() - this.state.start_time) / this.state.current_frame *100) /100  }
          
        </div>

        <div className="uap-wrap">
        <div className="uap" style={{
 
          backgroundImage: `url(${sprite})`,
          backgroundPositionX: this.state.current_frame * - 103
        }} />
        </div>
  

        <div className="timeline"
          style={{
            position: 'absolute',
            left: this.state.current_frame * -scale_x
          }}>
          <div className='dial'
          >
            {circles}
            {dots}
            {bars}
          </div>
          <div className='dialog'>
            {statements}
          </div>
          <div className='intervals'>
            {pulse_intervals}
          </div>

        </div>
        <div className="footer" style={{
          left: 9300 - this.state.current_frame
        }}>
        <img src={logo} style={{width: 161, paddingLeft: 200, paddingTop: "2em"}}/>
          <h1>This geometry is a creative dreamwork inquiry</h1>
          <p>This demonstration is produced by Daniel Rekshan as a creative dreamwork inquiry into ET/NHI contact through dreams.</p>
          <p>The capacity and inspiration to produce this analysis is directly derived from dreams involving ET/NHI.  To learn more, watch the video series <a href="https://youtube.com/playlist?list=PLc1xaLwy4Qv5unOPOuEubZXDTqdjgwuut">The Universal Language</a>.</p>
          <p><strong>D-SETI</strong> stands for the Dream Search for Extraterrestrial Intelligence or the Dream Study of Extraterrestrial Intelligence, depending on whether you believe we're searching for or studying ET intelligence.</p>
          <p>To discuss research and analysis of anomalous geometry, please email <a href="mailto:daniel@dseti.org">Daniel@DSETI.org</a>.</p>
          <p>For ET/NHI-related dreamwork sessions, training, and education, please visit <a href="https://dseti.org">DSETI.org</a>.</p>
          
        </div>
      </div>

    );
  }
}

export default App;
