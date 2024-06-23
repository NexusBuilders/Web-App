import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-agregar-bebida-dialog',
  templateUrl: './agregar-bebida-dialog.component.html',
  styleUrl: './agregar-bebida-dialog.component.css'
})
export class AgregarBebidaDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AgregarBebidaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data); // Envía los datos de vuelta al componente padre
  }
}
