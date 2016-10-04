import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { calleridRouting, calleridRoutingProviders} from "./callerIdRouting";
import {CampaignService} from "../providers/campaignsService";
import {ConcatenatePipe} from "../pipes/concatenate.pipe";
import {CallerIdBase} from "./pages/base";
import {CallerIdCards} from "./pages/cards";
import {CallerIdView} from "./pages/view";
import {CallerIdEdit} from "./pages/edit";
@NgModule({
    imports:
        [
            BrowserModule,
            Ng2BootstrapModule,
            calleridRouting,
        ],
    declarations:
        [
            ConcatenatePipe,
            CallerIdBase,
            CallerIdCards,
            CallerIdView,
            CallerIdEdit
        ],
    providers:
        [
            calleridRoutingProviders,
            CampaignService
        ],
    bootstrap:
        [
            CallerIdBase
        ]
})
export class CallerIdModule {
}
