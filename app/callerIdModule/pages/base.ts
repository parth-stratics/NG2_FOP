/**
 * Created by User on 9/28/2016.
 */

import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {CampaignService} from "../../providers/campaignsService";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {Campaign} from "../../objects/dto/dtObjects";
import {ColumnData} from "../../objects/display/dpo";
import {ListComponent} from "../../components/list/ListComponent";
import {GlyphiconDto, NameValueDto, BasicDto, RoutingParameters} from "../../objects/dto/baseObjects";
@Component({
    selector: 'callerid-list',
    template: `
<div class="row">
    <h2>Base form CallerId</h2>
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
    <table class="table table-striped">
            <tr>
                <td>#</td>
                <td>Phone</td>
                <td>Description</td>
                <td></td>
            </tr>
            <tr *ngFor="let item of items">
                <td>{{item.id}}</td>
                <td width="30%">{{item.value}}</td>
                <td>{{item.description | concatenate:30}}</td>
                <td width="20%">
                    <button type="button" class="btn btn-default" aria-label="View" (click)="view(item)">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                    </button>
                    <button type="button" class="btn btn-default" aria-label="Edit" (click)="edit(item)">
                        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
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
export class CallerIdBase extends ListComponent {

    selectedCampaign:Campaign;

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    parameters:RoutingParameters = new RoutingParameters();

    constructor ( private campaignService:CampaignService, private router: Router, private route: ActivatedRoute ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

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
                this.selectedCampaign = this.campaignService.getCampaign(this.parameters.id);
                this.items = this.selectedCampaign.callerids;
            } else {
                this.items = this.campaignService.getCallerIds();
            }
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
        this.router.navigate ( [ path, {id:this.parameters.id, cid: item.id } ] );
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
