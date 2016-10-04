import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CampaignService} from "../../providers/campaignsService";
import {Campaign} from "../../objects/dto/dtObjects";
import {EditComponent} from "../../components/edit/edit";
import {GlyphiconDto} from "../../objects/dto/baseObjects";
/**
 * Created by User on 10/1/2016.
 */
@Component({
    selector: 'campaign-general',
    template: `
<div class="row">
    <form class="col-sm-6">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" name="title" required [(ngModel)]="campaignToEdit.title">
              </div>
              <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" rows="3" id="description" name="description" required [(ngModel)]="campaignToEdit.description"></textarea>
              </div>
            <div class="form-group">
                  <label>Start Date:</label>
                  <input type="text" class="form-control" id="startDate" name="startDate" required [(ngModel)]="campaignToEdit.startDate">
              </div>
              <div class="form-group">
                  <label>End Date:</label>
                  <input type="text" class="form-control" id="endDate" name="endDate" required [(ngModel)]="campaignToEdit.endDate">
              </div>
              <div class="col-sm-12">
              <button type="button" class="btn btn-default" aria-label="Save" (click)="doNotSave()">
                    <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span>   Don't Save
              </button>
                <button type="button" class="btn btn-default" aria-label="Save" (click)="save()">
                    <span class="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span>   Save
              </button>
            </div>
    </form>
</div>
`
})
export class CampaignGeneral extends EditComponent  {

    campaignToEdit:Campaign;

    selectedViewOption:number=0;
    viewOptions:Array<GlyphiconDto> = new Array<GlyphiconDto>();

    stepNumber:number = 0;

    constructor ( private campaignService:CampaignService, private router: Router, private route: ActivatedRoute ) {

        super();

        this.viewOptions.push (  new GlyphiconDto ( 0, 'List', true, 'list' ) );
        this.viewOptions.push (  new GlyphiconDto ( 1, 'Card', false, 'th-large') );

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.campaignToEdit = this.campaignService.getCampaign(id);
        });

        this.editStep (0);
    }

    editStep ( num:number )
    {
        this.stepNumber = num;

        if ( num == 1 )
        {
            this.router.navigate ( [ '/campaigns/edit/callerids', { id: this.campaignToEdit.id } ] );
        }
    }

    backToLists()
    {
        this.router.navigate ( [ '/campaigns' ] );
    }

    newItem () {
        this.campaignToEdit = new Campaign();
    }

    save ()
    {
        this.router.navigate ( [ '/campaigns' ] );
    }

    doNotSave ()
    {
        this.router.navigate ( [ '/campaigns' ] );
    }
}