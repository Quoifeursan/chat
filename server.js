const WebSocket = require('ws');

// Créez un nouveau serveur WebSocket
const server = new WebSocket.Server({ port: 8080 });

// Tableau pour stocker les connexions des clients
const clients = new Set();

// Écoute des connexions des clients
server.on('connection', (socket) => {
  console.log('Nouvelle connexion WebSocket');

  // Ajoutez la connexion client au tableau
  clients.add(socket);

  // Écoute des messages reçus d'un client
  socket.on('message', (message) => {
    console.log('Message reçu :', message);

    // Diffusez le message à tous les clients connectés
    clients.forEach((client) => {
      if (client !== socket) {
        client.send(message);
      }
    });
  });

  // Écoute de la fermeture de la connexion d'un client
  socket.on('close', () => {
    console.log('Connexion WebSocket fermée');

    // Supprimez la connexion client du tableau
    clients.delete(socket);
  });
});
