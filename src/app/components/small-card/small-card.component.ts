import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.sass',
})
export class SmallCardComponent {
  @Input()
  photoCover: string = '';

  @Input()
  carTitle: string = '';

  @Input()
  Id: string = '';
}
