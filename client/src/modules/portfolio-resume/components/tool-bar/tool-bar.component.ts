import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MobileMenuDialogComponent } from '../mobile-menu-dialog/mobile-menu-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  isMenuOpen = false;
  constructor(public dialog: MatDialog) {

  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.dialog.open(MobileMenuDialogComponent, {
      width: '100%',
      maxWidth: '100%',
      position: { bottom: '0' },
      panelClass: 'menu-dialog-container'
    });

  }

}
