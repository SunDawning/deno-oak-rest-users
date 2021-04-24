rem start browser
start http://localhost:8080
rem run server
deno run --allow-net --unstable --watch --allow-read main.js
