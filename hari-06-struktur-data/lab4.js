import { Queue } from "./structures.js";
//uji dengan 3 Element, dequeue hingga kosong, dan dequeue pada queue kosong
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
//bequeue hingga kosong
console.log(queue.dequeue()); //1
console.log(queue.dequeue()); //2
console.log(queue.dequeue()); //3
//bequeue pada queue kosong
console.log(queue.dequeue()); //undefind