const express = require('express')

const server = express()
const PORT = 5000

server.get('/', (req, res) => res.send('Isso!!'))

server.listen(PORT, () => {
  console.log('server is running')
})
