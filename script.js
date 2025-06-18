let missedCount = 0;
let medData = {};

document.getElementById("medForm").addEventListener("submit", function(e) {
  e.preventDefault();

  medData = {
    name: document.getElementById("medicine").value,
    dosage: document.getElementById("dosage").value,
    time: document.getElementById("time").value,
    period: document.getElementById("period").value,
    familyName: document.getElementById("familyName").value,
    contact: document.getElementById("contact").value
  };

  alert(`Hello! You have added the medicine: ${medData.name}`);

  // Start reminder checking
  startReminder();
});

function startReminder() {
  setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5);

    if (currentTime === medData.time) {
      alert(`⏰ It's ${medData.period}! Time to take ${medData.name}.`);
    }
  }, 60000); // every minute
}

function markTaken() {
  missedCount = 0;
  document.getElementById("status").innerHTML = `🎉 Congrats! You took your medicine!`;
}

function markMissed() {
  missedCount++;
  let msg = `⚠️ Warning: You missed the tablet (${missedCount}/3).`;

  if (missedCount >= 3) {
    msg += `<br>🚨 Alerting ${medData.familyName} at ${medData.contact}`;
  }

  document.getElementById("status").innerHTML = msg;
}
