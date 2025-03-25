import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/data';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass',
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentText: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter((article) => article.id == id)[0];

    this.contentTitle = result.title;
    this.photoCover = result.photoCover;
    this.contentText = result.text;
  }
}
