# typescript-template

TypeScript Template

sudo apt install xvfb x11vnc websockify

Xvfb :0 -nolisten tcp -noreset -screen 0 1320x1200x24
x11vnc -display :0 -rfbport 4444 -rfbportv6 4444 -noipv6 -nopw -forever -localhost
websockify 5555 127.0.0.1:4444