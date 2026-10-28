var scores = [80, 65, 90];

// Fungsi untuk menghitung rata-rata dari array
function calculateAverage(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

// Fungsi untuk menentukan grade berdasarkan nilai rata-rata
function determineGrade(averageScore) {
  if (averageScore >= 85) {
    return "A";
  } else if (averageScore >= 70) {
    return "B";
  } else if (averageScore >= 55) {
    return "C";
  } else {
    return "D";
  }
}

// Fungsi untuk menghitung harga dengan pajak
function hitungHargaDenganPajak(harga) {
  var PAJAK = 0.11;
  return harga * (1 + PAJAK);
}

// Mencoba fungsi-fungsi di atas
var average = calculateAverage(scores);

console.log("Rata-rata:", average);

if (average === 80) {
  console.log("bagus");
}

console.log("Grade:", determineGrade(average));
console.log("Harga setelah pajak:", hitungHargaDenganPajak(100000));
