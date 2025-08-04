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
    name: "Allopurinol 300 mg tablet",
    directions: "Take 300 mg by mouth every day",
    common: "ZYLOPRIM",
    rx: "1957395",
    treatment: "Gout",
  },
  {
    number: 2,
    name: "Carvedilol 25 mg tablet",
    directions: "Take 2 Tabs (50 mg total) by mouth two(2) times daily",
    common: "COREG",
    rx: "1958723",
    treatment: "High Blood Pressure / Heart Failure",
  },
  {
    number: 3,
    name: "Atorvastatin 10 mg tablet",
    directions: "Take 10 mg by mouth every day",
    common: "LIPITOR",
    rx: "1930787",
    treatment: "High Cholesterol",
  },
  {
    number: 4,
    name: "ELIQUIS 5 mg tablet",
    directions: "TAKE 1 TABLET BY MOUTH TWICE DAILY",
    common: "Generic: apixaban",
    rx: "1930784",
    treatment: "Atrial Fibrillation / prevent blood clots",
  },
  {
    number: 5,
    name: "Valsartan-hydrochlorothiazide 320-25 mg tablet",
    directions: "Take 1 Tab by mouth two(2) times daily",
    common: "DIOVAN HCT",
    rx: "1958722",
    treatment: "High Blood Pressure",
  },
  {
    number: 6,
    name: "Metformin HCL 500 mg tablet",
    directions: "Take 1 Tab by mouth two(2) times daily",
    common: "Glucophage",
    rx: "1958371",
    treatment: "High Blood Sugar / Type 2 Diabetes",
  },
  {
    number: 7,
    name: "Hydralazine 25 mg tablet",
    directions: "Take 1 Tab by mouth two(2) times daily",
    common: "Apresoline",
    rx: "#######",
    treatment: "High Blood Pressure",
  },
  {
    number: 8,
    name: "Montelukast SOD 10 mg tablet",
    directions: "Take 1 Tab by mouth one(1) time daily",
    common: "Singulair",
    rx: "#######",
    treatment: "Asthma",
  },
  {
    number: 9,
    name: "Aspirin 81 mg",
    directions: "Take 1 Tab by mouth one(1) time daily",
    common: "Baby Aspirin",
    rx: "#######",
    treatment: "Reduce Stroke",
  },
  {
    number: 10,
    name: "Clopidogrel Bisulfate 75 mg",
    directions: "Take 1 Tab by mouth one(1) time daily",
    common: "Plavix",
    rx: "#######",
    treatment: "Prevent blood clots",
  },
  {
    number: 11,
    name: "Linzess 145 mcg",
    directions: "1 capsule on empty stomach, 30 min before meal, once a day",
    common: "Linaclotide",
    rx: "#######",
    treatment: "irritable bowel syndrome with constipation (IBS-C)",
  },
  {
    number: 12,
    name: "Mucinex 600 mg",
    directions: "1 tablet every 12 hrs as needed",
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
    <div class="patient-card">
      <p class="patient-name"><strong>${patient.name}</strong></p>
      <p class="patient-address">${patient.address}</p>
      <p class="patient-info">Mobile: ${phoneLink}<br>Email: ${emailLink}<br>Birthday: ${patient.birthday}</p>
    </div>
  `;
}

function renderPhysicians() {
  const el = document.getElementById('physicians');
  let html = "<h2>Physicians</h2>";
  physicians.forEach((doc) => {
    const phone = `<a href="tel:${doc.phone.replace(/[^+\d]/g, '')}">${doc.phone}</a>`;
    const fax = `<a href="tel:${doc.fax.replace(/[^+\d]/g, '')}">${doc.fax}</a>`;
    const mapQuery = encodeURIComponent(doc.address.replace(/<br>/g, ' '));
    const address = `<a href="https://maps.google.com/?q=${mapQuery}" target="_blank" rel="noopener noreferrer">${doc.address}</a>`;
    html += `
      <div class="physician">
        <div class="physician-info">
          <p class="phys-name"><strong>${doc.letter}. ${doc.name}</strong></p>
          <p>${doc.specialty}</p>
          <p>P: ${phone}</p>
          <p>F: ${fax}</p>
          <p>${address}</p>
        </div>
        <div class="physician-map">
          <iframe src="https://maps.google.com/maps?q=${mapQuery}&output=embed" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>`;
  });
  el.innerHTML = html;
}

function renderMedications() {
  const list = document.getElementById("med-list");
  medications.forEach((med) => {
    const link = `https://www.drugs.com/search.php?searchterm=${encodeURIComponent(med.name)}`;
    const li = document.createElement("li");
    li.className = "med-item";
    li.innerHTML = `<details>
        <summary data-med-name="${med.name}">${med.number}. <a href="${link}">${med.name}</a></summary>
        <div class="med-details">
          <p><strong>Directions:</strong> ${med.directions}</p>
          <p><strong>Commonly known as:</strong> ${med.common}</p>
          <p><strong>RX:</strong> ${med.rx}</p>
          <p><strong>Treatment:</strong> ${med.treatment}</p>
        </div>
      </details>`;
    list.appendChild(li);
  });
  attachToggleListeners();
}

function attachToggleListeners() {
  const detailsElements = document.querySelectorAll('.med-item details');
  detailsElements.forEach(details => {
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

document.addEventListener("DOMContentLoaded", () => {
  renderPatient();
  renderPhysicians();
  renderMedications();
});
