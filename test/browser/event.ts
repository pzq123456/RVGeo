import { EventEmitter } from './src/core/events';
class MyClass extends EventEmitter {
    constructor() {
        super();
    }

    doSomething() {
        // Emit an event
        this.emit('somethingHappened', { message: 'Something happened!' });
    }
}

const myInstance = new MyClass();

// Add event listener
myInstance.on('somethingHappened', (data: any) => {
    console.log(data.message); // Output: Something happened!
});

// Trigger the event
myInstance.doSomething();