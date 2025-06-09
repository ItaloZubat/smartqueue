let queue = [];
window.addEventListener('DOMContentLoaded', () => {
  const savedQueue = localStorage.getItem('queue');
  if (savedQueue) {
    queue = JSON.parse(savedQueue);
    updateQueueStatus();
  }
});

function saveQueue() {
  localStorage.setItem('queue', JSON.stringify(queue));
}

document.getElementById('queue-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const people = parseInt(document.getElementById('people').value);
  const outside = document.getElementById('outside').checked;

  if (!name || !people || people <= 0) return alert('Preencha os dados corretamente.');

  const client = {
    name,
    people,
    preference: outside ? 'Fora' : 'Dentro'
  };

  queue.push(client);
  saveQueue();
  updateQueueStatus();
  this.reset();
});

function updateQueueStatus() {
  const status = document.getElementById('queue-status');
  const list = document.getElementById('queue-list');
  list.innerHTML = '';

  if (queue.length === 0) {
    status.innerText = 'Fila vazia';
    return;
  }

  status.innerText = `Clientes na fila: ${queue.length}`;

  queue.forEach((client, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${client.name} (${client.people} pessoas, Mesa: ${client.preference})`;
    list.appendChild(li);
  });
}

function nextClient() {
  if (queue.length === 0) {
    document.getElementById('queue-status').innerText = 'Fila vazia';
    document.getElementById('queue-list').innerHTML = '';
    return;
  }

  const next = queue.shift();
  saveQueue();

  document.getElementById('queue-status').innerText =
    `Chamando: ${next.name} (${next.people} pessoas, Mesa: ${next.preference})`;

  showModal(next);
  updateQueueStatus();
}

function showModal(client) {
  const modal = document.getElementById('client-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <h3>Cliente Chamado</h3>
    <p><strong>Nome:</strong> ${client.name}</p>
    <p><strong>Número de Pessoas:</strong> ${client.people}</p>
    <p><strong>Preferência de Mesa:</strong> ${client.preference}</p>
    <button onclick="closeModal()">Fechar</button>
  `;

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('client-modal').style.display = 'none';
}

function clearQueue() {
  if (confirm("Tem certeza que deseja limpar toda a fila?")) {
    queue = [];
    localStorage.removeItem('queue');
    updateQueueStatus();
  }
}
