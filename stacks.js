class Stack {
    constructor() {
        this.data = [];
    }

    pushToStack(element){
        return this.data.push(element)
    }

    popFromStack() {
        return this.data.pop();
    }

    // isStackEmpty() {
    //     return this.data.length === 0;
    // }

    // peekStack() {
    //     return this.data[this.data.length - 1]
    // }
}

var our_stack = new Stack();

our_stack.pushToStack(1)
our_stack.pushToStack(2)
our_stack.pushToStack(3)

our_stack.popFromStack();


console.log(our_stack)

// our_stack.data.forEach((item) => {
//     console.log(`stack item: ${item}`)
// })
