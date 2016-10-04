import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CampaignService} from "../../providers/campaignsService";
import {Campaign} from "../../objects/dto/dtObjects";
import {EditComponent} from "../../components/edit/edit";
import {GlyphiconDto} from "../../objects/dto/baseObjects";
/**
 * Created by User on 10/1/2016.
 */
@Component({
    selector: 'campaign-view',
    template: `
<div class="row">
    <h2>Campaign View</h2>
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
                <button type="button" class="btn btn-default" aria-label="New" (click)="backToLists()">
                   <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>  Back
                </button>
                <button type="button" class="btn btn-default" aria-label="New" (click)="newItem()">
                   <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>  New
                </button>
        </div>
    </div>
</div>
<div  class="row">

</div>
`
})
export class CampaignView extends EditComponent {

    campaign:Campaign;

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    constructor ( private campaignService:CampaignService, private router: Router ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

        this.campaign = new Campaign();

    }

    backToLists()
    {
        this.router.navigate ( [ '/campaigns' ] );
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