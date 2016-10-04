/**
 * Created by User on 9/28/2016.
 */

import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {CampaignService} from "../../providers/campaignsService";
import {Router, UrlTree} from "@angular/router";
import {ListComponent} from "../../components/list/ListComponent";
import {GlyphiconDto} from "../../objects/dto/baseObjects";
@Component({
    selector: 'campaign-list',
    template: `
<div class="row">
    <h2>Base form Campaigns</h2>
</div>
<div  class="row">
    <div class="col-sm-6">
        <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="btn-group">
                <label class="btn btn-primary" *ngFor="let option of viewOptions" (click)="changeSelectedView ( option )"
                       [(ngModel)]="selectedViewOption" btnRadio="{{option.id}}">
                    <span class="{{option.icon}}" aria-hidden="true"></span>  {{option.name}}</label>
                <button type="button" class="btn btn-default" aria-label="New" (click)="newItem()">
                   <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>  New
                </button>
        </div>
    </div>
</div>
<div  class="row">
    <table class="table table-striped">
            <tr>
                <td>#</td>
                <td>Title</td>
                <td>Description</td>
                <td></td>
            </tr>
            <tr *ngFor="let item of items">
                <td>{{item.id}}</td>
                <td width="30%">{{item.title}}</td>
                <td>{{item.description}}</td>
                <td width="20%">
                    <button type="button" class="btn btn-default" aria-label="View" (click)="view(item)">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Edit" (click)="edit(item)">
                        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Pause">
                        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Stats">
                        <span class="glyphicon glyphicon-stats" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Delete">
                        <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
                    </button>
                </td>
            </tr>
        </table>
</div>
`
})

export class CampaignBase extends ListComponent {

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    constructor ( private campaignService:CampaignService, private router: Router ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

        this.items = campaignService.getCampaigns();

    }

    changeSelectedView ( option:GlyphiconDto )
    {
        if ( option.id == 0 )
        {
            this.router.navigate( [ '/campaigns'] );
        } else {
            this.router.navigate( [ '/campaigns/cards'] );
        }
    }

    view( item:any )
    {
        this.router.navigate ( [ '/campaigns/view', { id: item.id } ] );
    }

    edit( item:any )
    {
        this.router.navigate ( [ '/campaigns/edit', { id: item.id } ] );
    }

    newItem ()
    {
        this.router.navigate ( [ '/campaigns/edit/' ] );
    }
}