import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
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
  Id: string = '';
}
