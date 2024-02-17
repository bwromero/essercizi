import { Routes } from '@angular/router';
import { BasicListComponent } from './basic-list/basic-list.component';
import { ModerateListComponent } from './moderate-list/moderate-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'basic-list', component: BasicListComponent },
    { path: 'moderate-list', component: ModerateListComponent },
];
