import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteComponent } from './estudiante.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from "../../shared/shared.module";
import { DirectivesModule } from "../../shared/directives/directives.module";
import { MatIconModule } from '@angular/material/icon';
import { AbmEstudianteComponent } from './abm-estudiante/abm-estudiante.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EstudianteComponent,
    AbmEstudianteComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    DirectivesModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports:[
    EstudianteComponent
  ]
})
export class EstudianteModule { }
