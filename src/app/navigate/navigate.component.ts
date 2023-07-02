import { Component } from '@angular/core';
import { links } from '../links';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.sass']
})
export class NavigateComponent {
  links = links;
}