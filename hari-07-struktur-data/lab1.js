// Uji LinkedList: addFirst, addLast, RemoveFirst, Find, ToArray
// Serta kasus kosong dan satu elemen 
import { LinkedList, Queue, LinkedQueue } from "./structures.js";

const linkedList = new LinkedList();

// Uji kasus kosong
console.log("Kasus Kosong");
console.log("Size:", linkedList.size());
console.log("Is Empty:", linkedList.isEmpty());

// Uji addFirst dan addLast
linkedList.addFirst(1);
linkedList.addFirst(2);
linkedList.addFirst(0);
console.log("\nSetelah addFirst dan addLast:");
console.log("Array:", linkedList.toArray());
console.log("Size:", linkedList.size());
console.log("Is Empty:", linkedList.isEmpty());

// Uji RemoveFirst
const removed = linkedList.removeFirst();
console.log("\nSetelah removerFirst:");
console.log("Elemen yang dihapus:", removed);
console.log("Array:", linkedList.toArray());
console.log("Size:", linkedList.size());

//Uji Find
const found = linkedList.find((x) => x === 2);
console.log("\nMencari elemen 2:");
console.log("Elemen ditemukan:", found);

// Tambahkan method remove(data) yang menghapus node pertama bernilai data
// tangani kasus kepala, tengah, ekor, dan tidak ada
// Gambar dahulu pointer yang diubah
linkedList.remove(1);
console.log("\nSetelah remove(1):");
console.log("Array:", linkedList.toArray());
console.log("Size:", linkedList.size());

// Bandingkan kecepatan Queue array versi shift
// dengan LinkedQueue untuk 100.000 elemen memakai console.time, catat pada tabel
const QueueArray = new Queue()
const linkedQueue = new LinkedQueue();
const numElements = 100000;
for (let i = 0; i < numElements; i++){
    QueueArray.enqueue(i);
    linkedQueue.enqueue(i);
}

console.time("Queue Array Dequeue");

for (let i = 0; i < numElements; i++) {
    QueueArray;
}
console.timeEnd("Queue Array Dequeue");

console.time("LinkedQueue Dequeue");

for (let i = 0; i < numElements; i++){
    QueueArray.dequeue(i);
    linkedQueue.enqueue(i);
}

console.timeEnd("LinkedQueue Dequeue");