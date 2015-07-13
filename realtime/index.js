'use strict'
const socketio = require('socket.io')
//const database = require('../database')
//const helper = require('../helper')

module.exports = function (server) {

  const io = socketio(server)
  io.on('connection', onConnection)

  function onConnection (socket) {
    console.log(`Client connected ${socket.id}`)

    //llega un mensaje
    socket.on('message', function (message) {
        
        // Send video to everyone
        socket.broadcast.emit('message', message)

        // Send video to sender
        socket.emit('messageack', message)
    })

  }
}
