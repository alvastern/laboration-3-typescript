import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Varden } from './pages/varden/varden';
import { Arbete } from './pages/arbete/arbete';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "varden", component: Varden },
    { path: "arbete", component: Arbete }
];
