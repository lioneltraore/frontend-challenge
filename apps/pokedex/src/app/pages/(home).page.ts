import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'pokedex-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <pokedex-analog-welcome /> `,
})
export default class HomeComponent {}
