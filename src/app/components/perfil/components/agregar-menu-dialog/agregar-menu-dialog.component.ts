import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-menu-dialog',
  templateUrl: './agregar-menu-dialog.component.html',
  styleUrls: ['./agregar-menu-dialog.component.css']
})
export class AgregarMenuDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AgregarMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data); // Envía los datos de vuelta al componente padre
  }
}
