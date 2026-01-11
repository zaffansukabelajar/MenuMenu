const pasanganMakanan = {
  ayam: ["Nasi putih", "Sambal", "Lalapan", "Es teh"],
  mie: ["Telur", "Kerupuk", "Acar"],
  burger: ["Kentang goreng", "Soda", "Salad"]
};

function tampilkanPasangan() {
  const pilihan = document.getElementById("makanan").value;
  const hasil = document.getElementById("hasil");

  hasil.innerHTML = "";

  if (pilihan === "") return;

  pasanganMakanan[pilihan].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    hasil.appendChild(li);
  });
}