import { Routes } from '@angular/router';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { ModerateListComponent } from './components/moderate-list/moderate-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'basic-list', component: BasicListComponent },
    { path: 'moderate-list', component: ModerateListComponent },
];
