const patient = {
  name: "STEVE NGUYEN",
  address: "3097 Pelican Ln<br>Pensacola, FL 32514<br>United States",
  phone: "+1 (817) 706-3838",
  email: "snq3838@gmail.com",
  birthday: "November 21, 1952",
};

const physicians = [
  {
    letter: "A",
    name: "Sameer Waheed",
    specialty: "Interventional & Structural Cardiologist",
    phone: "(850)969-7979",
    fax: "(850)476-9352",
    address: "8333 N Davis Hwy, 4th floor<br>Pensacola, FL 32514",
  },
  {
    letter: "B",
    name: "Edward A Schuka, MD",
    specialty: "Family Medicine",
    phone: "(850)857-4040",
    fax: "(850)479-9180",
    address: "1190 E Nine Mile Rd<br>Pensacola, FL 32514",
  },
];

const medications = [
  {
    number: 1,
    name: "Allopurinol",
    dosage: "300 mg tablet",
    instructions: "Take 300 mg by mouth every day",
    doctor: "Dr. Edward A Schuka",
    type: "other",
    common: "ZYLOPRIM",
    rx: "1957395",
    treatment: "Gout",
  },
  {
    number: 2,
    name: "Carvedilol",
    dosage: "25 mg tablet",
    instructions:
      "Take 2 Tabs (50 mg total) by mouth two(2) times daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "COREG",
    rx: "1958723",
    treatment: "High Blood Pressure / Heart Failure",
  },
  {
    number: 3,
    name: "Atorvastatin",
    dosage: "10 mg tablet",
    instructions: "Take 10 mg by mouth every day",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "LIPITOR",
    rx: "1930787",
    treatment: "High Cholesterol",
  },
  {
    number: 4,
    name: "Eliquis",
    dosage: "5 mg tablet",
    instructions: "Take 1 tablet by mouth twice daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "Generic: apixaban",
    rx: "1930784",
    treatment: "Atrial Fibrillation / prevent blood clots",
  },
  {
    number: 5,
    name: "Valsartan-hydrochlorothiazide",
    dosage: "320-25 mg tablet",
    instructions: "Take 1 Tab by mouth two(2) times daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "DIOVAN HCT",
    rx: "1958722",
    treatment: "High Blood Pressure",
  },
  {
    number: 6,
    name: "Metformin HCL",
    dosage: "500 mg tablet",
    instructions: "Take 1 Tab by mouth two(2) times daily",
    doctor: "Dr. Edward A Schuka",
    type: "other",
    common: "Glucophage",
    rx: "1958371",
    treatment: "High Blood Sugar / Type 2 Diabetes",
  },
  {
    number: 7,
    name: "Hydralazine",
    dosage: "25 mg tablet",
    instructions: "Take 1 Tab by mouth two(2) times daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "Apresoline",
    rx: "#######",
    treatment: "High Blood Pressure",
  },
  {
    number: 8,
    name: "Montelukast SOD",
    dosage: "10 mg tablet",
    instructions: "Take 1 Tab by mouth one(1) time daily",
    doctor: "Dr. Edward A Schuka",
    type: "other",
    common: "Singulair",
    rx: "#######",
    treatment: "Asthma",
  },
  {
    number: 9,
    name: "Aspirin",
    dosage: "81 mg",
    instructions: "Take 1 Tab by mouth one(1) time daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "Baby Aspirin",
    rx: "#######",
    treatment: "Reduce Stroke",
  },
  {
    number: 10,
    name: "Clopidogrel Bisulfate",
    dosage: "75 mg",
    instructions: "Take 1 Tab by mouth one(1) time daily",
    doctor: "Dr. Sameer Waheed",
    type: "heart",
    common: "Plavix",
    rx: "#######",
    treatment: "Prevent blood clots",
  },
  {
    number: 11,
    name: "Linzess",
    dosage: "145 mcg",
    instructions:
      "1 capsule on empty stomach, 30 min before meal, once a day",
    doctor: "Dr. Edward A Schuka",
    type: "other",
    common: "Linaclotide",
    rx: "#######",
    treatment: "irritable bowel syndrome with constipation (IBS-C)",
  },
  {
    number: 12,
    name: "Mucinex",
    dosage: "600 mg",
    instructions: "1 tablet every 12 hrs as needed",
    doctor: "Dr. Edward A Schuka",
    type: "other",
    common: "Guaifenesin",
    rx: "#######",
    treatment:
      "Expectorant – helps loosen mucus in chest and throat (cold, cough, congestion)",
  },
];

function renderPatient() {
  const el = document.getElementById('patient');
  const phoneLink = `<a href="tel:${patient.phone.replace(/[^+\d]/g, '')}">${patient.phone}</a>`;
  const emailLink = `<a href="mailto:${patient.email}">${patient.email}</a>`;
  el.innerHTML = `
    <h2><i class="fas fa-user"></i> Patient Info</h2>
    <details class="patient-card">
      <summary class="patient-name collapse-summary">${patient.name}</summary>
      <div class="patient-details">
        <p class="patient-address">${patient.address}</p>
        <p class="patient-info">Mobile: ${phoneLink}<br>Email: ${emailLink}<br>Birthday: ${patient.birthday}</p>
      </div>
    </details>
  `;
}

function renderPhysicians() {
  const el = document.getElementById('physicians');
  let html = "<h2><i class='fas fa-user-md'></i> Physicians</h2>";
  physicians.forEach((doc) => {
    const phone = `<a href="tel:${doc.phone.replace(/[^+\d]/g, '')}">${doc.phone}</a>`;
    const fax = `<a href="tel:${doc.fax.replace(/[^+\d]/g, '')}">${doc.fax}</a>`;
    const mapQuery = encodeURIComponent(doc.address.replace(/<br>/g, ' '));
    const address = `<a href="https://maps.google.com/?q=${mapQuery}" target="_blank" rel="noopener noreferrer">${doc.address}</a>`;
    html += `
      <details class="physician">
        <summary class="collapse-summary"><strong>${doc.letter}. ${doc.name}</strong> - ${doc.specialty}</summary>
        <div class="physician-details">
          <div class="physician-info">
            <p>P: ${phone}</p>
            <p>F: ${fax}</p>
            <p>${address}</p>
          </div>
          <div class="physician-map">
            <iframe src="https://maps.google.com/maps?q=${mapQuery}&output=embed" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </details>`;
  });
  el.innerHTML = html;
}

function renderMedications() {
  const list = document.getElementById('med-list');
  list.innerHTML = '';
  medications.forEach((med) => {
    const link = `https://www.drugs.com/search.php?searchterm=${encodeURIComponent(med.name)}`;
    const li = document.createElement('li');
    li.className = `med-item ${med.type}`;
    li.innerHTML = `
      <details>
        <summary class="collapse-summary" data-med-name="${med.name}">${med.number}. <a href="${link}">${med.name}</a></summary>
        <div class="med-details">
          <div class="drug-info-left">
            <div class="info-row">
              <span class="info-title">Dosage:</span>
              <span class="info-data">${med.dosage}</span>
            </div>
            <div class="info-row">
              <span class="info-title">Instructions:</span>
              <span class="info-data">${med.instructions}</span>
            </div>
            <div class="info-row">
              <span class="info-title">Prescribing Doctor:</span>
              <span class="info-data">${med.doctor}</span>
            </div>
            <div class="info-row">
              <span class="info-title">Commonly known as:</span>
              <span class="info-data">${med.common}</span>
            </div>
            <div class="info-row">
              <span class="info-title">RX:</span>
              <span class="info-data">${med.rx}</span>
            </div>
            <div class="info-row">
              <span class="info-title">Treatment:</span>
              <span class="info-data">${med.treatment}</span>
            </div>
          </div>
          <div class="med-pill-upload">
            <div class="pill-image-box" id="pill-image-box-${med.number}">
              <!-- Uploaded image will appear here -->
            </div>
            <input type="file" accept="image/*" id="pill-upload-${med.number}" title="Upload pill image for ${med.name}">
          </div>
        </div>
      </details>
    `;
    list.appendChild(li);
    document
      .getElementById(`pill-upload-${med.number}`)
      .addEventListener('change', function (e) {
        handlePillImageUploadForMed(e, med.number);
      });
  });
  attachToggleListeners();
}

function handlePillImageUploadForMed(event, medNumber) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      const pillBox = document.getElementById(`pill-image-box-${medNumber}`);
      pillBox.innerHTML = '';
      pillBox.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}

function attachToggleListeners() {
  const detailsElements = document.querySelectorAll('.med-item details');
  detailsElements.forEach((details) => {
    details.addEventListener('toggle', () => {
      const header = document.getElementById('sticky-header');
      if (details.open) {
        document.querySelectorAll('.med-item details[open]').forEach((d) => {
          if (d !== details) {
            d.open = false;
          }
        });
        header.textContent = details.querySelector('summary').dataset.medName;
      } else {
        header.textContent = 'Medication List';
      }
    });
  });
}

function expandAllAndPrint() {
  const details = document.querySelectorAll('details');
  details.forEach((d) => (d.open = true));
  const handleDone = () => {
    details.forEach((d) => (d.open = false));
    window.removeEventListener('focus', handleDone);
    window.removeEventListener('afterprint', handleDone);
    window.location.reload();
  };
  window.addEventListener('afterprint', handleDone, { once: true });
  window.addEventListener('focus', handleDone, { once: true });
  window.print();
}

function initUI() {
  const modeBtn = document.getElementById('mode-toggle');
  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = modeBtn.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Attach to print button
  document.getElementById('print-btn').addEventListener('click', () => {
    expandAllAndPrint();
  });

  const qr = document.createElement('img');
  qr.src =
    'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=' +
    encodeURIComponent(window.location.href);
  qr.alt = 'QR code';
  document.getElementById('qr-container').appendChild(qr);

  const menu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  document.querySelectorAll('#nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPatient();
  renderPhysicians();
  renderMedications();
  initUI();
});
