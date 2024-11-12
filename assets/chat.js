/*document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('chatInput');
    const messageText = input.value.trim();
  
    if (messageText === "") {
      alert("Por favor, digite uma mensagem.");
      return;
    }
  
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', 'owner'); 
    
    const messageContent = document.createElement('div');
    messageContent.classList.add('content');
    messageContent.textContent = messageText;
  
    const messageTime = document.createElement('div');
    messageTime.classList.add('time');
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    messageTime.textContent = currentTime;
  
    messageContainer.appendChild(messageContent);
    messageContainer.appendChild(messageTime);
  
    const chatMain = document.querySelector('main');
    chatMain.appendChild(messageContainer);
  
    input.value = '';
    input.focus();
  
    chatMain.scrollTop = chatMain.scrollHeight;
  });*/

  const main = document.querySelector("main")
    const input = document.querySelector("input")
    const button = document.querySelector("button")

    function monstrarMensagem(owner, message, timestamp, nick) {
      main.innerHTML += `
        <div class="message ${owner ? "owner" : ""}">
          <div class="content">${message}</div>
          <div class="time">${timestamp}</div>
          <div class="nick">${nick}</div>
        </div>
      `
    }

    const ws = new WebSocket("ws://192.168.120.53:4000")
  
    ws.addEventListener("open", () => console.log("Conectado"))
    ws.addEventListener("close", () => console.log("Desconectado"))

    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data)
      monstrarMensagem(false, data.message, data.timestamp, data.nick)
    })

    button.addEventListener("click", () => {
      const message = input.value
      ws.send(message)
      input.value = ""
    })
  
