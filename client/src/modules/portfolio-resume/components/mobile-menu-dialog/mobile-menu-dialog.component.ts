import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu-dialog',
  standalone: true,
  imports: [MatIconModule, MatDialogContent, RouterModule],
  templateUrl: './mobile-menu-dialog.component.html',
  styleUrl: './mobile-menu-dialog.component.scss'
})
export class MobileMenuDialogComponent {

  constructor(public dialogRef: MatDialogRef<MobileMenuDialogComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
