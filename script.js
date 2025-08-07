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

const appointments = [
  {
    name: "Lincoln Jimenez",
    date: "Thu, Aug 21, 2025 03:00 PM",
    reason: "Transsphenoidal resection pituitary mass with no images",
    location: "HCA Florida West Neurosurgical Specialists",
    address: "2120 E Johnson Ave, Ste 106, Pensacola, FL 325146091",
    phone: "(850)555-0101",
  },
  {
    name: "Edward Schuka",
    date: "Mon, Aug 18, 2025 02:30 PM",
    reason: "Non Traumatic Brain Injury - pt in WFH discharged 07/28",
    location: "HCA Florida West Primary Care - Nine Mile Rd",
    address: "1190 E Nine Mile Rd, Pensacola, FL 325141651",
    phone: "(850)555-0102",
  },
  {
    name: "Lauren Knierim",
    date: "Tue, Sep 9, 2025 03:00 PM",
    reason: "CC 6M POST WM",
    location: "HCA Florida West Cardiology Specialists - Pensacola",
    address: "8333 N Davis Hwy FL 4, Pensacola, FL 325146050",
    phone: "(850)555-0103",
  },
  {
    name: "Mary Johnson",
    date: "Wed, Jan 1, 2025 11:00 AM",
    reason: "Routine check-up",
    location: "HCA Florida West Outpatient Clinic",
    address: "1000 Medical Pkwy, Pensacola, FL 32514",
    phone: "(850)555-0104",
  },
];

appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

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

function createICS(appt) {
  const start = new Date(appt.date);
  const end = new Date(start.getTime() + 30 * 60000);
  const pad = (n) => String(n).padStart(2, '0');
  const format = (d) =>
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
      d.getUTCHours()
    )}${pad(d.getUTCMinutes())}00Z`;
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${appt.reason}\nDTSTART:${format(
    start
  )}\nDTEND:${format(end)}\nLOCATION:${appt.address}\nEND:VEVENT\nEND:VCALENDAR`;
  return URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
}

function checkIn(name) {
  console.log(`Check-In stub for ${name}`);
}

function renderAppointments() {
  const section = document.getElementById('appointments-section');

  const wrapper = document.createElement('details');
  wrapper.className = 'appointments-wrapper';
  wrapper.open = true;

  const summary = document.createElement('summary');
  summary.className = 'collapse-summary';
  summary.innerHTML = "<i class='far fa-calendar-alt'></i> Upcoming Appointments";
  wrapper.appendChild(summary);

  appointments.forEach((appt, idx) => {
    const card = document.createElement('details');
    card.className = 'appointment-card';

    const cardSummary = document.createElement('summary');
    cardSummary.className = 'collapse-summary';

    const header = document.createElement('div');
    header.className = 'appointment-header';

    const icon = document.createElement('div');
    icon.className = 'profile-icon';
    icon.textContent = appt.name.charAt(0);

    const main = document.createElement('div');
    main.className = 'appointment-main';
    main.innerHTML = `<h3 class="appointment-name">${appt.name}</h3><p class="appointment-datetime">${appt.date}</p>`;

    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${appt.phone.replace(/[^+\d]/g, '')}`;
    phoneLink.className = 'phone-link';
    phoneLink.setAttribute('aria-label', 'Call');
    phoneLink.innerHTML = '<i class="fas fa-phone"></i>';
    phoneLink.addEventListener('click', (e) => e.stopPropagation());

    header.appendChild(icon);
    header.appendChild(main);
    header.appendChild(phoneLink);
    cardSummary.appendChild(header);
    card.appendChild(cardSummary);

    const details = document.createElement('div');
    details.className = 'appointment-details';

    const mapQuery = encodeURIComponent(appt.address.replace(/<br>/g, ' '));
    const addressLink = `<a href="https://maps.google.com/?q=${mapQuery}" target="_blank" rel="noopener noreferrer">${appt.address}</a>`;

    details.innerHTML = `
          <p class="appointment-reason">${appt.reason}</p>
          <p class="appointment-location">${appt.location}</p>
          <p class="appointment-address">${addressLink}</p>
          <iframe src="https://maps.google.com/maps?q=${mapQuery}&output=embed" class="map-snapshot" frameborder="0" allowfullscreen></iframe>
          <div class="appointment-actions">
            <a href="${createICS(appt)}" download="appointment-${idx + 1}.ics" class="calendar-link" aria-label="Add to Calendar"><i class="far fa-calendar-plus"></i></a>
            <button class="check-in-btn" data-name="${appt.name}">Check-In</button>
          </div>
          <textarea class="appointment-notes" placeholder="Notes..."></textarea>
        `;
    card.appendChild(details);
    wrapper.appendChild(card);
  });

  section.innerHTML = '';
  section.appendChild(wrapper);

  section.querySelectorAll('.check-in-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      checkIn(e.target.dataset.name);
    });
  });
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
  document.getElementById('print-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const meds = medications.map(
      ({ number, name, dosage, common, rx, instructions, treatment }) => ({
        number,
        name,
        dosage,
        common,
        rx,
        instructions,
        treatment,
      })
    );
    localStorage.setItem('medications', JSON.stringify(meds));
    localStorage.setItem('patient', JSON.stringify(patient));
    window.open('print.html', '_blank');
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
  renderAppointments();
  renderMedications();
  initUI();
});
