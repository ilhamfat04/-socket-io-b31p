const socketIo = (io) => {
  // code here
  let userCount = 0
  io.on('connection', (socket) => {
    userCount++
    console.log('Client id : ', socket.id);
    console.log('Client connect : ', userCount);

    socket.on('disconnect', () => {
      userCount--
      console.log('client disconnect');
    })
  })
}

module.exports = socketIo