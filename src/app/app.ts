import { Component } from '@angular/core';
import { Main } from './containers';

@Component({
  selector: 'app',
  directives: [
    Main
  ],
  template: `
    <div>
      <main-container>
        Hi2
      </main-container>
    </div>
  `
})

export class App {}
