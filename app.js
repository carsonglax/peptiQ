const peptides = [
  {
    name: "GHK-Cu",
    summary: "Copper peptide studied for skin repair and collagen support.",
    effects: {
      studied: ["skin regeneration", "wound healing support"],
      risks: ["limited human clinical data", "unknown long-term effects"]
    }
  },
  {
    name: "Tesamorelin",
    summary: "A growth hormone releasing peptide studied for visceral fat reduction.",
    effects: {
      studied: ["fat metabolism changes", "IGF-1 increase"],
      risks: ["possible glucose changes", "requires clinical supervision in medical use"]
    }
  },
  {
    name: "Ipamorelin",
    summary: "A growth hormone secretagogue studied in research settings.",
    effects: {
      studied: ["growth hormone release"],
      risks: ["limited long-term human studies"]
    }
  },
  {
    name: "Retatrutide",
    summary: "Multi-receptor agonist studied for metabolic effects.",
    effects: {
      studied: ["weight loss effects in trials", "glucose regulation"],
      risks: ["GI side effects in studies", "not fully understood long-term"]
    }
  }
];

// Build home page list (only runs on index.html)
if (document.getElementById("list")) {
  const list = document.getElementById("list");

  peptides.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.summary}</p>
      <button onclick="openPeptide(${index})">View</button>
    `;

    list.appendChild(card);
  });
}

function openPeptide(i) {
  localStorage.setItem("selectedPeptide", JSON.stringify(peptides[i]));
  window.location.href = "detail.html";
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}