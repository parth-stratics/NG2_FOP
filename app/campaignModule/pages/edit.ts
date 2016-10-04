import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CampaignService} from "../../providers/campaignsService";
import {Campaign} from "../../objects/dto/dtObjects";
import {EditComponent} from "../../components/edit/edit";
import {GlyphiconDto, RoutingParameters} from "../../objects/dto/baseObjects";
/**
 * Created by User on 10/1/2016.
 */
@Component({
    selector: 'campaign-edit',
    template: `
<div class="row">
    <h2>Campaign Edit</h2>
</div>
<div  class="row">
    <div class="col-sm-3">
        
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation"><a [routerLink]="[ '/campaigns/edit', { id: this.campaign.id } ]">General</a></li>
          <li role="presentation"><a [routerLink]="[ '/campaigns/edit/callerids', { id: this.campaign.id } ]">Caller Ids</a></li>
        </ul>
    </div>
    <div class="col-sm-9">
        <router-outlet></router-outlet>
    </div>
</div>
`
})
export class CampaignEdit extends EditComponent {

    campaign:Campaign;

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    stepNumber:number = 0;

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
                this.campaign = this.campaignService.getCampaign(this.parameters.id);
            }
        });

        this.editStep (0);
    }

    editStep ( num:number )
    {
        this.stepNumber = num;

        if ( num == 1 )
        {
            this.router.navigate ( [ '/campaigns/edit/callerids', { id: this.campaign.id } ] );
        } else {
            this.router.navigate ( [ '/campaigns/edit', { id: this.campaign.id } ] );
        }
    }

    backToLists()
    {
        this.router.navigate ( [ '/campaigns' ] );
    }

    newItem () {
        this.campaign = new Campaign();
    }
}