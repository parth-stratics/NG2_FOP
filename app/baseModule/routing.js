"use strict";
/**
 * Created by User on 9/30/2016.
 */
var router_1 = require('@angular/router');
var homePage_1 = require("./pages/home/homePage");
var appRoutes = [
    { path: '', component: homePage_1.HomePage },
    { path: 'home', component: homePage_1.HomePage },
    { path: '**', component: homePage_1.HomePage },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map