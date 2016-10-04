"use strict";
/**
 * Created by User on 9/30/2016.
 */
var router_1 = require('@angular/router');
var base_1 = require("./pages/base");
var cards_1 = require("./pages/cards");
var edit_1 = require("./pages/edit");
var view_1 = require("./pages/view");
var base_2 = require("../callerIdModule/pages/base");
var general_1 = require("./pages/general");
var edit_2 = require("../callerIdModule/pages/edit");
var view_2 = require("../callerIdModule/pages/view");
var cards_2 = require("../callerIdModule/pages/cards");
var campaignRoutes = [
    { path: 'campaigns', component: base_1.CampaignBase },
    { path: 'campaigns/cards', component: cards_1.CampaignCards },
    { path: 'campaigns/view', component: view_1.CampaignView },
    { path: 'campaigns/edit', component: edit_1.CampaignEdit,
        children: [
            {
                path: '',
                component: general_1.CampaignGeneral
            },
            {
                path: 'callerids',
                component: base_2.CallerIdBase
            },
            {
                path: 'callerids/edit',
                component: edit_2.CallerIdEdit
            },
            {
                path: 'callerids/view',
                component: view_2.CallerIdView
            },
            {
                path: 'callerids/cards',
                component: cards_2.CallerIdCards
            }
        ]
    }
];
exports.campaignRoutingProviders = [];
exports.campaignRouting = router_1.RouterModule.forRoot(campaignRoutes);
//# sourceMappingURL=campaignRouting.js.map