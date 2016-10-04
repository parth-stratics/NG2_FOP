import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CampaignService} from "../../providers/campaignsService";
import {Campaign, CallerId} from "../../objects/dto/dtObjects";
import {EditComponent} from "../../components/edit/edit";
import {GlyphiconDto, RoutingParameters} from "../../objects/dto/baseObjects";
import {Location} from "@angular/common";
/**
 * Created by User on 10/1/2016.
 */
@Component({
    selector: 'callerid-edit',
    template: `
<div class="row">
Caller Id Edit {{callerid.id}}
</div>
<div class="row">
    <div>
                    <p>#: {{callerid.id}}</p>
                    <p>Phone: {{callerid.value}}</p>
              </div>
              <div class="col-sm-12">
                  <button type="button" class="btn btn-default" aria-label="Save" (click)="doNotSave()">
                        <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>   Don't Save
                  </button>
                    <button type="button" class="btn btn-default" aria-label="Save" (click)="save()">
                        <span class="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span>   Save
                  </button>
            </div>
</div>
`
})
export class CallerIdView extends EditComponent {

    callerid:CallerId;
    campaign:Campaign;

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    stepNumber:number = 0;

    parameters:RoutingParameters = new RoutingParameters();

    constructor ( private campaignService:CampaignService, private router: Router, private route: ActivatedRoute  ) {

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
                this.campaign = this.campaignService.getCampaign(this.parameters.id);
            } else {
                this.campaign = new Campaign ();
            }
            if ( this.parameters.cid > 0 )
            {
                this.callerid = this.campaign.callerids[0];
            } else {
                this.callerid = new CallerId();
            }
        });
        this.editStep (0);
    }

    editStep ( num:number )
    {
        this.stepNumber = num;
    }

    backToLists()
    {
        let path:string = '/callerids';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids';
            this.router.navigate ( [ path, {id:this.parameters.id } ] );
            return;
        }
        this.router.navigate ( [ path ] );
    }

    newItem () {
        this.campaign = new Campaign();
    }

    save ()
    {
        let path:string = '/callerids';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids';
            this.router.navigate ( [ path, {id:this.parameters.id } ] );
            return;
        }
        this.router.navigate ( [ path ] );
    }

    doNotSave ()
    {
        let path:string = '/callerids';
        if ( this.router.url.indexOf("campaigns/edit") > 0 )
        {
            path = '/campaigns/edit/callerids';
            this.router.navigate ( [ path, {id:this.parameters.id } ] );
            return;
        }
        this.router.navigate ( [ path ] );
    }
}