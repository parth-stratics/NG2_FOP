/**
 * Created by User on 9/30/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {CallerIdBase} from "./pages/base";
import {CallerIdCards} from "./pages/cards";
import {CallerIdEdit} from "./pages/edit";
import {CallerIdView} from "./pages/view";
const calleridRoutes: Routes = [
    { path: 'callerids', component: CallerIdBase },
    { path: 'callerids/cards', component: CallerIdCards },
    { path: 'callerids/edit', component: CallerIdEdit },
    { path: 'callerids/view', component: CallerIdView},
];

export const calleridRoutingProviders: any[] = [

];

export const calleridRouting: ModuleWithProviders = RouterModule.forRoot(calleridRoutes);
