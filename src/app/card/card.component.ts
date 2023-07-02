import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() card = {id: 0, title: '', link: ''};


  public open(link: string) {
    window.open(link, "_self");
  }
}
