import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-abm-estudiante',
  templateUrl: './abm-estudiante.component.html',
  styleUrls: ['./abm-estudiante.component.scss']
})
export class AbmEstudianteComponent {

  nombreControl = new FormControl ('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(12)
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(12)
  ]);
  edadControl = new FormControl('', [
    Validators.required,
    Validators.min(21)
  ]);
  cursoControl = new FormControl('', [Validators.required]);
  clasesControl = new FormControl('', [Validators.required]);

  estudianteForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    edad: this.edadControl,
    curso: this.cursoControl,
    clases: this.clasesControl
  })

  constructor(private dialogRef: MatDialogRef<AbmEstudianteComponent>) {}
  guardar():void{
    this.dialogRef.close(this.estudianteForm.value)
  }
}
