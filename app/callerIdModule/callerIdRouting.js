"use strict";
/**
 * Created by User on 9/30/2016.
 */
var router_1 = require('@angular/router');
var base_1 = require("./pages/base");
var cards_1 = require("./pages/cards");
var edit_1 = require("./pages/edit");
var view_1 = require("./pages/view");
var calleridRoutes = [
    { path: 'callerids', component: base_1.CallerIdBase },
    { path: 'callerids/cards', component: cards_1.CallerIdCards },
    { path: 'callerids/edit', component: edit_1.CallerIdEdit },
    { path: 'callerids/view', component: view_1.CallerIdView },
];
exports.calleridRoutingProviders = [];
exports.calleridRouting = router_1.RouterModule.forRoot(calleridRoutes);
//# sourceMappingURL=callerIdRouting.js.map