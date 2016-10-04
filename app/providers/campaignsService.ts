import {Injectable} from "@angular/core";
import {Campaign, CallerId} from "../objects/dto/dtObjects";
import {MockCampaign} from "../objects/dto/dtoGenerator";
/**
 * Created by User on 9/28/2016.
 */
@Injectable()
export class CampaignService {
    campaigns:Array<Campaign> = new Array<Campaign>();

    constructor() {

        this.campaigns = [ MockCampaign.create(), MockCampaign.create(), MockCampaign.create(), MockCampaign.create() ];

    }

    getCallerIds ():Array<CallerId>
    {
        let array:Array<CallerId> = [];

        for ( var i=0; i< this.campaigns.length; i++ )
        {
            let campaign:Campaign = this.campaigns[i];
            for ( var j=0; j< campaign.callerids.length; j++ )
            {
                array.push (campaign.callerids[j]);
            }
        }
        return array;
    }

    getCampaigns():Array<Campaign> {
        return this.campaigns;
    }

    getCampaign ( id:number ): Campaign
    {
        let campaign:Campaign = null;
        for ( let i=0; i< this.campaigns.length; i++)
        {
            if ( this.campaigns[i].id == id )
            {
                return this.campaigns[i];
            }
        }

        return campaign;
    }

}
