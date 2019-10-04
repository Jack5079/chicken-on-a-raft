#!/usr/bin/env node
require('console-png').attachTo(console)
const { join } = require('path')
console.png(require('fs').readFileSync(join(__dirname, '/chicken.png')))
var time = 0
var player = require('play-sound')({})

function formatTime () {
  var res = ''
  var hours = 0
  var mins = 0
  var secs = time

  while (secs >= 60) {
    secs -= 60
    mins += 1
  }

  while (mins >= 60) {
    mins -= 60
    hours += 1
  }

  if (secs === 0) {
    secs = ''
  } else if (secs === 1) {
    secs += ' second'
  } else if (secs > 1) {
    secs += ' seconds'
  }

  if (mins === 0) {
    mins = ''
  } else if (mins === 1) {
    mins += ' minute'
  } else if (mins > 1) {
    mins += ' minutes'
  }

  if (hours === 0) {
    hours = ''
  } else if (hours === 1) {
    hours += ' hour'
  } else if (hours > 1) {
    hours += ' hours'
  }

  if (hours !== '') {
    res += hours + ' '
  }

  if (mins !== '') {
    res += mins + ' '
  }

  if (secs !== '') {
    res += secs
  }

  return res
}

function timer () {
  time++
  var out = formatTime()
  console.log(`You have been on a raft with a chicken for ${out}.`)
}
setInterval(timer, 1000)
player.play(join(__dirname, '/sound.mp3'), function (err) {
  if (err) throw err
})
