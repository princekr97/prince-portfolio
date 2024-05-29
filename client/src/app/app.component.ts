import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ToolBarComponent } from '../modules/portfolio-resume/components/tool-bar/tool-bar.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from '../modules/portfolio-resume/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabsModule, MatIconModule, ToolBarComponent, MatCardModule, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prince-portfolio';

}
