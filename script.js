
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
const userInputValue = userInput.value.trim();
if (userInputValue!== '') {
// Process user input and generate response
const response = generateResponse(userInputValue);
addMessageToChatLog(userInputValue, response);
userInput.value = '';
}
});

function generateResponse(userInput) {
  const response = userInput.toLowerCase();

  if (response.includes("hello") || response.includes("hi")) {
    return "Hello, World!";
  } else if (response.includes("how are you")) {
    return "I'm doing great, thanks for asking!";
  } else {
    return "I'm not sure I understand. Can you please rephrase?";
  }
}
