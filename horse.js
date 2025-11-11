const chatBox = document.getElementById('chatBox');
const input = document.getElementById('userInput');

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add(sender);
  msg.innerHTML = `<b>${sender === 'vent' ? 'Vent' : 'You'}:</b> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage('user', userText);
  input.value = '';

  appendMessage('vent', 'Typing... 🐴');

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText })
    });
    const data = await response.json();
    chatBox.lastChild.remove();
    appendMessage('vent', data.reply || "Neigh... I think my vent’s clogged. 🐴💨");
  } catch (err) {
    chatBox.lastChild.remove();
    appendMessage('vent', "Bruh, even vents have downtime. Try again. 💀");
  }
}

// ✅ Press Enter to send
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});
