document.addEventListener('DOMContentLoaded', () => {
  const meds = JSON.parse(localStorage.getItem('medications')) || [];
  const patient = JSON.parse(localStorage.getItem('patient')) || null;

  const titleEl = document.getElementById('print-title');
  const today = new Date();
  const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  titleEl.textContent = `Medication List as of ${dateStr}`;

  if (patient) {
    const pInfo = document.getElementById('patient-info');
    pInfo.innerHTML = `<strong>${patient.name}</strong><br>${patient.address}<br>${patient.phone}`;
  }

  const container = document.getElementById('medications');
  meds.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'medication-card';
    card.innerHTML = `
      <div class="med-number">${m.number}.</div>
      <div class="med-name">${m.name} <span class="dosage">${m.dosage}</span></div>
      <div class="med-detail"><span class="label">Commonly known as:</span> <span class="value">${m.common}</span></div>
      <div class="med-detail"><span class="label">RX:</span> <span class="value">${m.rx}</span></div>
      <div class="med-detail"><span class="label">Instructions:</span> <span class="value">${m.instructions}</span></div>
      <div class="med-detail"><span class="label">Treatment:</span> <span class="value">${m.treatment}</span></div>
    `;
    container.appendChild(card);
  });

  document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
  });
});
