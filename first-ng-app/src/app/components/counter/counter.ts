import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>
      Counter Value:{{ counterValue() }} 
    </p>

      <div>
      	<button (click) = "increment()">Increment</button>
	<button (click) = "decrement()">Decrement</button>
	<button (click) = "reset()">Reset</button>
      </div>
  `,
  styles: ``
})
export class Counter {
	counterValue = signal(0);
	increment() {
		//this.counterValue.set(this.counterValue() + 1);
		this.counterValue.update((val) => val + 1);
	}
	decrement() {
		this.counterValue.update((val) => val - 1);
	}
	reset() {
		this.counterValue.set(0);
	}

}
