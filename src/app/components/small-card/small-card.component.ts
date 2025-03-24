import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.sass',
})
export class SmallCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  carTitle: string = '';

  @Input()
  cardLink: string = '';
}
