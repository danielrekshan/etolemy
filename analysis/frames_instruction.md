Generate the frames from the videos in ../video by using this command
<code>ffmpeg -i ../pyramid.mp4 "../frames/%0d.png"</code>

convert -delay 5 -loop 0 *.png all5.gif