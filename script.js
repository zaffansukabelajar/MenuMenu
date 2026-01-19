const gambar = {
  ayam: "images/ayam.jpg",
  mie: "images/mie.jpg",
  burger: "images/burger.jpg"
};

function tampilkanPasangan() {
  const pilihan = document.getElementById("makanan").value;
  const hasil = document.getElementById("hasil");
  const img = document.getElementById("gambarMakanan");

  hasil.innerHTML = "";
  img.src = "";

  if (pilihan === "") return;

  img.src = gambar[pilihan];
  img.alt = pilihan;

  pasanganMakanan[pilihan].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    hasil.appendChild(li);
  });
}
