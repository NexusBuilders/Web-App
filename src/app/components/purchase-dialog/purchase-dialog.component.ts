import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.css']
})
export class PurchaseDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PurchaseDialogComponent>,
    private router: Router
  ) {}

  closeDialog() {
    this.dialogRef.close();
    this.router.navigate(['/restaurant']);
  }
}
