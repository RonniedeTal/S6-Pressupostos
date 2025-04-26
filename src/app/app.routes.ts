import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DetailsComponent } from './page/details/details.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },

    {
        path:'**',
        redirectTo:'home'
    },
    {
        path:'details',
        component:DetailsComponent
    },
    
];
