const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5501 });
console.log('server start :5501')
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
      console.log(data)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});