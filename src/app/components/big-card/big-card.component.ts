import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.sass',
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  cardLink: string = '';
}
