import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { GalleryComponent } from './features/gallery/gallery.component';

export const routes: Routes = [

    {
        path: 'gallery',
        component: GalleryComponent,
    },
    {
        path: '',
        title: "Abdhulla K | Software Engineer",
        component: HomeComponent,
    },
];
