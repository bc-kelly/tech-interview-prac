class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(element) {
       return this.data.push(element);
    }

    dequeue() {
        return this.data.shift();
    }
}

let my_queue = new Queue();

my_queue.enqueue(1);
my_queue.enqueue(2);
my_queue.enqueue(3);

// console.log(my_queue)

my_queue.dequeue();

my_queue.data.forEach((el) => {
    console.log(el)
})