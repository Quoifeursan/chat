// Connexion à WebSocket
const socket = new WebSocket('ws://localhost:8080');

// Écoute des messages reçus
socket.addEventListener('message', function (event) {
  var message = event.data;
  afficherMessage(message);
});

// Fonction pour envoyer un message
function envoyerMessage() {
  var messageInput = document.getElementById('messageInput');
  var message = messageInput.value;

  // Envoi du message au serveur WebSocket
  socket.send(message);

  // Affichage du message localement
  afficherMessage('Moi: ' + message);

  // Effacement du champ de saisie
  messageInput.value = '';
}

// Fonction pour afficher un message
function afficherMessage(message) {
  var chatbox = document.getElementById('chatbox');
  var messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}
