import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AbmEstudianteComponent} from "./abm-estudiante/abm-estudiante.component";

export interface Estudiante{
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  curso: string;
  clases: string;
  fecha_registro: Date
}

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {
  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: "Mariano",
      apellido: "Martinez",
      edad: 37,
      curso: "Taller de Programación",
      clases: "Base de Datos",
      fecha_registro: new Date(),
    },
    {
      id: 2,
      nombre: "Enzo",
      apellido: "Gasperi",
      edad: 40,
      curso: "Taller de Programación",
      clases: "Programación 1",
      fecha_registro: new Date(),
    },
    {
      id: 3,
      nombre: "Ignacio",
      apellido: "De León",
      edad: 40,
      curso: "Taller de Programación",
      clases: "C++",
      fecha_registro: new Date(),
    },
    {
      id: 4,
      nombre: "Victoria",
      apellido: "Lapaz",
      edad: 30,
      curso: "Taller de Programación",
      clases: "C++",
      fecha_registro: new Date(),
    }
  ];

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id', 'nombre_completo', 'edad', 'curso', 'clases', 'fecha_registro', 'eliminar', 'editar'];

  aplicarFiltros(ev: Event): void{
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog) {}

  /*abrirABMEstudiante(): void{
    this.matDialog.open(AbmEstudianteComponent)
  }*/

  crearAlumno(): void {
    const dialog = this.matDialog.open(AbmEstudianteComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          // AGREGANDO NUEVO ELEMENTO:
          {
            ...valor, // { nombre: 'xxxxxx', apellido: 'xxxxx' }
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

  eliminarAlumno(alumnoParaEliminar: Estudiante): void {
    this.dataSource.data = this.dataSource.data.filter(
      (alumnoActual) => alumnoActual.id !== alumnoParaEliminar.id,
    );
  }

  editarAlumno(alumnoParaEditar: Estudiante): void {
    const dialog = this.matDialog.open(AbmEstudianteComponent, {
      data: {
        alumnoParaEditar
      }
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.id === alumnoParaEditar.id
            ? ({ ...alumnoActual, ...valorDelFormulario}) // { nombre: 'xxxxxx', apellido: 'xxxxx' }
            : alumnoActual,
        );
      }
    })
  }
}
