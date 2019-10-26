#!/usr/bin/env node
require('console-png').attachTo(console)
const { join } = require('path')
console.png(require('fs').readFileSync(join(__dirname, '/chicken.png')))
var time = 0
var player = require('play-sound')({})


var rtf1 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
function timer () {
  time++
  var out = rtf1.formatToParts(time, 'seconds')
  out.shift()
  console.log(`You have been on a raft with a chicken for ${out[0].value}${out[1].value}.`)
}
setInterval(timer, 1000)
player.play(join(__dirname, '/sound.mp3'), function (err) {
  if (err) throw err
})
