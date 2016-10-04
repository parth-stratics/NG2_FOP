import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import {routing, appRoutingProviders} from "./routing";
import {CampaignModule} from "../campaignModule/campaignModule";
import {HomePage} from "./pages/home/homePage";
import {Base} from "./pages/base/base";
import {CallerIdModule} from "../callerIdModule/callerIdModule";
@NgModule({
    imports:
        [
            BrowserModule,
            Ng2BootstrapModule,
            CampaignModule,
            CallerIdModule,
            routing,
        ],
    declarations:
        [
            Base,
            HomePage,
        ],
    providers:
        [
            appRoutingProviders,
        ],
    bootstrap:
        [
            Base
        ]
})
export class AppModule {
}
