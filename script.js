const patient = {
  name: "STEVE NGUYEN",
  address: "6888 N 9th Ave<br>Pensacola, FL 32504",
  phone: "(850)476-0710"
};

const physicians = [
  {
    letter: "A",
    name: "Sameer Waheed",
    specialty: "Interventional & Structural Cardiologist",
    phone: "(850)969-7979",
    fax: "(850)476-9352",
    address: "8333 N Davis Hwy, 4th floor<br>Pensacola, FL 32514"
  },
  {
    letter: "B",
    name: "Edward A Schuka, MD",
    specialty: "Family Medicine",
    phone: "(850)857-4040",
    fax: "(850)479-9180",
    address: "1190 E Nine Mile Rd<br>Pensacola, FL 32514"
  }
];

const medications = [
  { number: 1, name: "Allopurinol 300 mg tablet", directions: "Take 300 mg by mouth every day", common: "ZYLOPRIM", rx: "1957395", treatment: "Gout" },
  { number: 2, name: "Carvedilol 25 mg tablet", directions: "Take 2 Tabs (50 mg total) by mouth two(2) times daily", common: "COREG", rx: "1958723", treatment: "High Blood Pressure / Heart Failure" },
  { number: 3, name: "Atorvastatin 10 mg tablet", directions: "Take 10 mg by mouth every day", common: "LIPITOR", rx: "1930787", treatment: "High Cholesterol" },
  { number: 4, name: "ELIQUIS 5 mg tablet", directions: "TAKE 1 TABLET BY MOUTH TWICE DAILY", common: "Generic: apixaban", rx: "1930784", treatment: "Atrial Fibrillation / prevent blood clots" },
  { number: 5, name: "Valsartan-hydrochlorothiazide 320-25 mg tablet", directions: "Take 1 Tab by mouth two(2) times daily", common: "DIOVAN HCT", rx: "1958722", treatment: "High Blood Pressure" },
  { number: 6, name: "Metformin HCL 500 mg tablet", directions: "Take 1 Tab by mouth two(2) times daily", common: "Glucophage", rx: "1958371", treatment: "High Blood Sugar / Type 2 Diabetes" },
  { number: 7, name: "Hydralazine 25 mg tablet", directions: "Take 1 Tab by mouth two(2) times daily", common: "Apresoline", rx: "#######", treatment: "High Blood Pressure" },
  { number: 8, name: "Montelukast SOD 10 mg tablet", directions: "Take 1 Tab by mouth one(1) time daily", common: "Singulair", rx: "#######", treatment: "Asthma" },
  { number: 9, name: "Aspirin 81 mg", directions: "Take 1 Tab by mouth one(1) time daily", common: "Baby Aspirin", rx: "#######", treatment: "Reduce Stroke" },
  { number: 10, name: "Clopidogrel Bisulfate 75 mg", directions: "Take 1 Tab by mouth one(1) time daily", common: "Plavix", rx: "#######", treatment: "Prevent blood clots" },
  { number: 11, name: "Linzess 145 mcg", directions: "1 capsule on empty stomach, 30 min before meal, once a day", common: "Linaclotide", rx: "#######", treatment: "irritable bowel syndrome with constipation (IBS-C)" },
  { number: 12, name: "Mucinex 600 mg", directions: "1 tablet every 12 hrs as needed", common: "Guaifenesin", rx: "#######", treatment: "Expectorant – helps loosen mucus in chest and throat (cold, cough, congestion)" }
];

function renderPatient() {
  const el = document.getElementById('patient');
  el.innerHTML = `<h2>Patient</h2>
    <p><strong>${patient.name}</strong><br>${patient.address}<br>${patient.phone}</p>`;
}

function renderPhysicians() {
  const el = document.getElementById('physicians');
  let html = '<h2>Physicians</h2>';
  physicians.forEach(doc => {
    html += `<div class="physician">
      <p class="phys-name"><strong>${doc.letter}. ${doc.name}</strong></p>
      <p>${doc.specialty}</p>
      <p>P: ${doc.phone} | F: ${doc.fax}</p>
      <p>${doc.address}</p>
    </div>`;
  });
  el.innerHTML = html;
}

function renderMedications() {
  const list = document.getElementById('med-list');
  medications.forEach(med => {
    const link = `https://www.drugs.com/search.php?searchterm=${encodeURIComponent(med.name)}`;
    const li = document.createElement('li');
    li.className = 'med-item';
    li.innerHTML = `<details>
        <summary>${med.number}. ${med.name}</summary>
        <div class="med-details">
          <p><strong>Directions:</strong> ${med.directions}</p>
          <p><strong>Commonly known as:</strong> ${med.common}</p>
          <p><strong>RX:</strong> ${med.rx}</p>
          <p><strong>Treatment:</strong> ${med.treatment}</p>
          <p><a href="${link}" target="_blank" rel="noopener noreferrer">More information</a></p>
        </div>
      </details>`;
    list.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPatient();
  renderPhysicians();
  renderMedications();
});
