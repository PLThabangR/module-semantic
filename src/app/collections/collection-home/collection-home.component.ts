import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent {

  data =[
    {name:'Khomotso',age:43,job:'designer',employed:true},
    {name:'John',age:20,job:'Software Developer',employed:false},
    {name:'James',age:34,job:'Manager',employed:true}
  ]

  headers=[
    { key:'employed',label:'Has a Job?'},
   { key:'name',label:'Name'},
   { key:'age',label:'Age'},
   { key:'job',label:'Job'}
  ]
}
