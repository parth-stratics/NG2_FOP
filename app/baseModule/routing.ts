/**
 * Created by User on 9/30/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomePage} from "./pages/home/homePage";
const appRoutes: Routes = [
    { path: '', component: HomePage },
    { path: 'home', component: HomePage },
    { path: '**', component: HomePage },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
