/**
 * Created by User on 9/30/2016.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {CampaignBase} from "./pages/base";
import {CampaignCards} from "./pages/cards";
import {CampaignEdit} from "./pages/edit";
import {CampaignView} from "./pages/view";
import {CallerIdBase} from "../callerIdModule/pages/base";
import {CampaignGeneral} from "./pages/general";
import {CallerIdEdit} from "../callerIdModule/pages/edit";
import {CallerIdView} from "../callerIdModule/pages/view";
import {CallerIdCards} from "../callerIdModule/pages/cards";


const campaignRoutes: Routes = [
    { path: 'campaigns', component: CampaignBase },
    { path: 'campaigns/cards', component: CampaignCards },
    { path: 'campaigns/view', component: CampaignView },
    { path: 'campaigns/edit', component: CampaignEdit,
        children: [
            {
                path: '',
                component: CampaignGeneral
            },
            {
                path: 'callerids',
                component: CallerIdBase
            },
            {
                path: 'callerids/edit',
                component: CallerIdEdit
            },
            {
                path: 'callerids/view',
                component: CallerIdView
            },
            {
                path: 'callerids/cards',
                component: CallerIdCards
            }
        ]
    }

];

export const campaignRoutingProviders: any[] = [
];

export const campaignRouting: ModuleWithProviders = RouterModule.forRoot(campaignRoutes);
