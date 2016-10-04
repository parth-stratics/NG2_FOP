import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {campaignRouting, campaignRoutingProviders} from "./campaignRouting";
import {CampaignBase} from "./pages/base";
import {CampaignService} from "../providers/campaignsService";
import {ConcatenatePipe} from "../pipes/concatenate.pipe";
import {CampaignCards} from "./pages/cards";
import {CampaignEdit} from "./pages/edit";
import {CampaignView} from "./pages/view";
import {CampaignGeneral} from "./pages/general";
@NgModule({
    imports:
        [
            BrowserModule,
            Ng2BootstrapModule,
            campaignRouting,
        ],
    declarations:
        [
            CampaignView,
            CampaignEdit,
            CampaignBase,
            CampaignCards,
            CampaignGeneral,
        ],
    providers:
        [
            campaignRoutingProviders,
            CampaignService
        ],
    bootstrap:
        [
            CampaignBase
        ]
})
export class CampaignModule {
}
