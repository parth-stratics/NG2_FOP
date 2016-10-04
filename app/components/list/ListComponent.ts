/**
 * Created by User on 9/28/2016.
 */

import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ColumnData} from "../../objects/display/dpo";
@Component({
    selector: 'list-component',
})
export class ListComponent {
    @Input() columns:Array<ColumnData>;
    @Input() items:Array<any>;
    
    constructor () {

        this.columns = [ new ColumnData("#", "id", "col-sm-2") ];
        this.columns.push ( new ColumnData("Title", "title", "col-sm-4") );
        this.columns.push ( new ColumnData("Description", "description", "col-sm-4") );
    }
}
