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
    summary: "Growth hormone releasing peptide studied for visceral fat reduction.",
    effects: {
      studied: ["fat metabolism changes", "IGF-1 increase"],
      risks: ["possible glucose changes", "clinical supervision required in research use"]
    }
  },
  {
    name: "Ipamorelin",
    summary: "Growth hormone secretagogue studied in research settings.",
    effects: {
      studied: ["growth hormone release"],
      risks: ["limited long-term human data"]
    }
  },
  {
    name: "Retatrutide",
    summary: "Triple receptor agonist studied for metabolic effects.",
    effects: {
      studied: ["weight loss in trials", "glucose regulation"],
      risks: ["GI side effects in studies", "long-term unknowns"]
    }
  }
];

const list = document.getElementById("list");
const search = document.getElementById("search");

function render(items) {
  list.innerHTML = "";

  items.forEach((p, index) => {
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

// Search logic
search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = peptides.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  render(filtered);
});

// initial load
render(peptides);