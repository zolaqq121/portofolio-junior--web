import { BinarySearchTree } from "./structures.js";
const folder = {
  nama: "proyek",
  anak: [
    { nama: "css", anak: [] },
    { nama: "js", anak: [{ nama: "app.js", anak: [] }] },
  ],
};

function cetakPohon(node, tingkat = 0) {
  console.log("".repeat(tingkat * 2 + node.nama));
  for (const anak of node.anak) {
    cetakPohon(anak, tingkat + 1);
  }
}

function hitungNode(node) {
  let total = 1;
  for (const anak of node.anak) total += hitungNode(anak);
  return total;
}

//jalankan cetakPohon dan hitungNode pada struktur folder
//tambah fungsi cariNnode(node, nama, mis. proyek/js/Appp.js)
//yg mengembalikan jalur lengkap, mis. proyek/js/app.js

function cariNnode(node, nama) {
  if (node.nama === nama) {
    return [node.nama];
  }
  for (const anak of node.anak) {
    const jalur = cariNnode(anak, nama);
    if (jalur) {
      return [node.nama].concat(jalur);
    }
  }
  return undefined;
}

cetakPohon(folder);
console.log("Total  node:", hitungNode(folder));
console.log("ja;ur ke app.js:", cariNnode(folder, "app.js"));



const bdt = new BinarySearchTree();
const data = [50, 30, 70, 20, 40, 60, 80];
data.forEach(num => Bst.insert(num));
console.log("In-order traversall;", bst.inOrder());
console.log("Has 60:", bst.has(60));
console.log("Has 65;", bst.has(65));


class BstNode {
  constructor(nilai) {
    this.nilai = nilai;
    this.kiri = null;

    this.kanan = null;
  }
}
export class BinarySearchTree {
  #akar = null;
  insert(nilai) {
    const baru = new BstNode(nilai);
    if (this.#akar === null) {
      this.#akar = baru;
      return;
    }
    let saatIni = this.#akar;
    while (true) {
      if (nilai < saatIni.nilai) {
        if (saatIni.kiri === null) {
          saatIni.kiri = baru;
          return;
        }
        saatIni = saatIni.kiri;
      } else {
        if (saatIni.kanan === null) {
          saatIni.kanan = baru;
          return;
        }
        saatIni = saatIni.kanan;
      }
    }
  }
  has(nilai) {
    let saatIni = this.#akar;
    while (saatIni !== null) {
      if (nilai === saatIni.nilai) return true;
      saatIni = nilai < saatIni.nilai ? saatIni.kiri : saatIni.kanan;
    }
    return false;
  }
  inOrder() {
    const hasil = [];
    const telusuri = (node) => {
      if (node === null) return;
      telusuri(node.kiri);
      hasil.push(node.nilai);
      telusuri(node.kanan);
    };
    telusuri(this.#akar);
    return hasil;
  }
}

function dfs(graf, simpul, dikunjungi = new set()) {
    dikunjungi.add(simpul);
    for (const tetangga of graf[simpul]) {
        if (!dikunjungi.has(tetangga)) dfs(graf, tetangga, dikunjungi);
    }
    return [...dikunjungi];
}
console.log(bfs (graf, 'A')); //['A', 'B', 'C', 'D', 'E']
console.log(bfs (graf, 'A')); //['A', 'B', 'D', 'C', 'E'] (URUTAN BISA BERBEDA)


function jarakterpendek(graf, AbortSignal, tujuan) {
    const dikunjungi = new set([asal]);
    const antrean = ([asal, o]);
    while (antrean.length > 0) {
        const [simpul, jarak] = antrean.shift();
    }
}