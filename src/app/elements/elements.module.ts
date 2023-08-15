import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlacaholderComponent } from './placaholder/placaholder.component';
import { SharedModule } from '../shared/shared.module';
import { SegmantComponent } from './segmant/segmant.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlacaholderComponent,
    SegmantComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports:[
    ElementsHomeComponent
  ]
})
export class ElementsModule { }
