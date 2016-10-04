/**
 * Created by User on 9/28/2016.
 */
import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {CampaignService} from "../../providers/campaignsService";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CardComponent} from "../../components/cards/CardComponent";
import {GlyphiconDto, RoutingParameters} from "../../objects/dto/baseObjects";
import {Campaign} from "../../objects/dto/dtObjects";

@Component({
    selector: 'callerid-cards',
    template: `
<div class="row">
    <h2>Cards form CallerId</h2>
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
        <h2>{{selectedItem.value}}</h2>
        <p>{{selectedItem.description}}</p>
        <p><button type="button" class="btn btn-default" aria-label="Edit" (click)="edit(selectedItem)">
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
export class CallerIdCards extends CardComponent {

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    campaign:Campaign;

    parameters:RoutingParameters = new RoutingParameters();

    constructor ( private campaignService:CampaignService, private router: Router, private route: ActivatedRoute  ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

        this.items = campaignService.getCampaigns();
        this.currentIndex = 0;
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {

            for ( var i=0; i< this.parameters.params.length; i ++)
            {
                let value = +params[ this.parameters.params[i] ];
                this.parameters[ this.parameters.params[i] ] = value;
            }
            if ( this.parameters.id > 0 )
            {
                this.campaign = this.campaignService.getCampaign(this.parameters.id);
            } else {
                this.campaign = new Campaign ();
            }
            this.items = this.campaign.callerids;
        });

    }

    changeSelectedView ( option:GlyphiconDto )
    {
        let path:string = '/callerids';
        if ( option.id == 0 )
        {
            if ( this.router.url.indexOf("campaigns/edit") > 0 )
            {
                path = '/campaigns/edit/callerids';
            }
        } else {
            path = '/callerids/cards';
            if ( this.router.url.indexOf("campaigns/edit") > 0 )
            {
                path = '/campaigns/edit/callerids/cards' ;
            }
        }
        this.router.navigate ( [ path, {id:this.parameters.id  } ] );
    }

    view( item:any )
    {
        let path:string = '/callerids/view';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids/view';
        }
        this.router.navigate ( [ path, {id:this.parameters.id, cid: this.parameters.cid } ] );
    }

    edit( item:any )
    {
        let path:string = '/callerids/edit';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate ( [ path, {id:this.parameters.id, cid: item.id } ] );
    }

    newItem ()
    {
        let path:string = '/callerids/edit';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids/edit';
        }
        this.router.navigate ( [ path, {id:this.parameters.id, cid: 0 } ] );
    }
}
