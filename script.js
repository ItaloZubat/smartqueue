let queue = [];
let clientId = 0;

function enterQueue() {
  clientId++;
  queue.push(clientId);
  document.getElementById("client-position").innerText = `Você é o cliente número ${clientId}`;
  updateQueueStatus();
}

function nextClient() {
  if (queue.length === 0) {
    document.getElementById("queue-status").innerText = "Fila vazia";
    return;
  }
  const next = queue.shift();
  document.getElementById("queue-status").innerText = `Chamando cliente ${next}`;
}

function updateQueueStatus() {
  if (queue.length === 0) {
    document.getElementById("queue-status").innerText = "Fila vazia";
  } else {
    document.getElementById("queue-status").innerText = `Clientes na fila: ${queue.length}`;
  }
}