export class DoOnce {
    constructor(func = () => { }) {
        this.done = false;
        this.func = func;
    }
    run() {
        if (!this.done) {
            this.func();
            this.done = true;
        }
    }
    reset() {
        this.done = false;
    }
}
