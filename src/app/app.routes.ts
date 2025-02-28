import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { GalleryComponent } from './features/gallery/gallery.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
];
