/**
 * Created by User on 9/28/2016.
 */
import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {CampaignService} from "../../providers/campaignsService";
import {Router} from "@angular/router";
import {Campaign} from "../../objects/dto/dtObjects";
import {ColumnData} from "../../objects/display/dpo";
import {CardComponent} from "../../components/cards/CardComponent";
import {GlyphiconDto} from "../../objects/dto/baseObjects";

@Component({
    selector: 'campaign-cards',
    template: `
<div class="row">
    <h2>Cards form Campaigns</h2>
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
<div class="row">
    <div>
        <h2>{{selectedItem.title}}</h2>
        <p>{{selectedItem.description}}</p>
        <p>
            <button type="button" class="btn btn-default" aria-label="Edit" (click)="view(selectedItem)">
                <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>  View
            </button>
            <button type="button" class="btn btn-default" aria-label="Edit" (click)="edit(selectedItem)">
                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>  Edit
            </button>
        </p>
        <p><button type="button" class="btn btn-default" aria-label="Prev" (click)="prevItem()" [disabled]="previousDisabled">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </button>
            <button type="button" class="btn btn-default" aria-label="Next" (click)="nextItem()" [disabled]="nextDisabled">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </button>
        </p>
    </div>
</div>
`
})
export class CampaignCards extends CardComponent {

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    constructor ( private campaignService:CampaignService, private router: Router ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

        this.items = campaignService.getCampaigns();
        this.currentIndex = 0;
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
        this.router.navigate ( [ '/campaigns/edit' ] );
    }
}