document.getElementById('btn').addEventListener('click', function() {
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
  });
