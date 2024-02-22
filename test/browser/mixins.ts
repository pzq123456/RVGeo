import { applyMixins } from './src/core/mixins';
// test code for applyMixins
class Animal {
    public move() {
        console.log('moving');
    }
}

class CanSwim {
    public swim() {
        console.log('swimming dfes');
    }
}

class CanFly {
    public fly() {
        console.log('flyiewqe edwang');
    }

    public move() {
        console.log('moving dsjklfjdsfjkl');
    }
}

class Fish extends Animal {
    // public swim() {
    //     console.log('swimming');
    // }
}

class Bird extends Animal {
    public fly() {
        console.log('flying');
    }
}

interface Fish extends CanSwim, CanFly { }

applyMixins(Fish, [CanSwim, CanFly]);
applyMixins(Bird, [CanFly]);

const fish = new Fish();
fish.move();
fish.swim();
fish.fly();
// 调用move方法时，会调用CanFly中的move方法，因为CanFly中的move方法在Fish中被覆盖了
// 若要调用Animal中的move方法，需要在Fish中重新定义move方法