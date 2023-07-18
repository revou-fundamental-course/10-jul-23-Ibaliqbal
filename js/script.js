const submit = document.getElementById("hitung");
const tinggiBadan = document.getElementById("tinggibadan");
const beratBadan = document.getElementById("beratbadan");
const jenisKelamin = document.getElementsByName("jenisKelamin");
const hasilAkhir = document.getElementById("hasilHitung");
const buttonReset = document.getElementById("resetBtn");
// const title = document.getElementById("titleHasil");
// const hasilHitung = document.getElementById("hasilHitungBmi");
// const keterangan = document.getElementById("statusBB");

submit.addEventListener("click", () => {
  let konversiTinggi = tinggiBadan.value / 100;
  let hasil = beratBadan.value / Math.pow(konversiTinggi, 2);
  const tanda = document.createElement("p");
  const judul = document.createElement("h2");
  const totalBB = document.createElement("h1");

  function rumusBmi(total) {
    let weight;
    if (total < 18.5) {
      return (weight = "Kekurangan Berat Badan");
    } else if (total >= 18.5 && total < 24.9) {
      return (weight = "Normal (Ideal)");
    } else if (total >= 24.9 && total < 29.9) {
      return (weight = "Kelebihan berat badan");
    } else {
      return (weight = "Kegemukan(Obesitas)");
    }
  }

  function pilihanGender() {
    if (jenisKelamin.length > 0) {
      let selectGender = jenisKelamin[0].value;
      return selectGender;
    }
  }
  console.log(pilihanGender());

  judul.classList.add("title-akhir");
  totalBB.classList.add("total-akhir");
  tanda.classList.add("keterangan-akhir");

  judul.innerHTML = rumusBmi(Number(hasil));
  //   title.innerHTML = rumusBmi(Number(hasil));

  totalBB.innerHTML = Number(hasil).toFixed(1);
  //   hasilHitung.innerHTML = Number(hasil).toFixed(1);

  tanda.innerHTML = "Anda memiliki " + rumusBmi(Number(hasil));
  //   keterangan.innerHTML = "Anda memiliki " + rumusBmi(Number(hasil));

  hasilAkhir.appendChild(judul);
  hasilAkhir.appendChild(totalBB);
  hasilAkhir.appendChild(tanda);

  buttonReset.addEventListener("click", () => {
    hasilAkhir.removeChild(judul);
    hasilAkhir.removeChild(totalBB);
    hasilAkhir.removeChild(tanda);
  });
});
