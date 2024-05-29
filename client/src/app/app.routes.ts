import { Routes } from '@angular/router';
import { GallaryComponent } from '../modules/portfolio-resume/components/gallary/gallary.component';
import { HomeComponent } from '../modules/portfolio-resume/components/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallary', component: GallaryComponent }
  ];