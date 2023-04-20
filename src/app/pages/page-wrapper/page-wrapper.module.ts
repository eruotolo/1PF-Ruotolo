import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from './page-wrapper.component';
import {EstudianteModule} from "../estudiante/estudiante.module";


@NgModule({
  declarations: [
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    EstudianteModule
  ],
  exports:[
    PageWrapperComponent
  ]
})
export class PageWrapperModule { }
