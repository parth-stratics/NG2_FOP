/**
 * Created by User on 9/28/2016.
 */
import {Component, Input, AfterViewInit, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ColumnData} from "../../objects/display/dpo";
@Component({
    selector: 'card-component'
})
export class CardComponent {
    @Input() columns:Array<ColumnData>;
    @Input() selectedItem:any;

    @Output() viewItem:EventEmitter<any> = new EventEmitter<any>();
    @Output() editItem:EventEmitter<any> = new EventEmitter<any>();

    _items:Array<any>;
    _currentIndex:number;

    showNavigationControls:boolean = true;
    previousDisabled:boolean = true;
    nextDisabled= false;

    constructor () {

        this.columns = [ new ColumnData("#", "id", "col-sm-2") ];
        this.columns.push ( new ColumnData("Title", "title", "col-sm-4") );
        this.columns.push ( new ColumnData("Description", "description", "col-sm-4") );
    }

    @Input()
    set items (value :Array<any> )
    {
        this._items = value;

        if ( this._items.length > this.currentIndex )
        {
            this.currentIndex = 0;
        }
    };

    get items ():Array<any>
    {
        return this._items;
    }

    @Input()
    set currentIndex (value :number )
    {
        this._currentIndex = value;
        if ( this._items != null && this._items.length > value )
        {
            this.selectedItem = this._items[value];
        }
        this.enableNavigationControls ();
    };

    get currentIndex ():number
    {
        return this._currentIndex;
    }

    prevItem()
    {
        if ( this.currentIndex > 0 )
        {
            this.currentIndex = this.currentIndex-1;
            this.selectedItem = this._items[this.currentIndex];
        }
        this.enableNavigationControls ();
    }

    nextItem()
    {
        if ( this.currentIndex < this._items.length-1 )
        {
            this.currentIndex = this.currentIndex+1;
            this.selectedItem = this._items[this.currentIndex];
        }
        this.enableNavigationControls ();
    }

    enableNavigationControls ()
    {
        this.previousDisabled = ( this.currentIndex == 0 )
        this.nextDisabled = ( this.currentIndex == this._items.length-1 );
    }
}
