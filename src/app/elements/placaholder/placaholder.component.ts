import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placaholder',
  templateUrl: './placaholder.component.html',
  styleUrls: ['./placaholder.component.css']
})
export class PlacaholderComponent {
@Input() header = true;
@Input() lines = 3;




}
