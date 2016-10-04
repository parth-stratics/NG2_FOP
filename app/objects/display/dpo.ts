/**
 * Created by User on 9/28/2016.
 */
export class ColumnData
{
    name:string;
    dataField:string;
    width:string;

    constructor ( name:string, field:string, width:string )
    {
        this.name = name;
        this.dataField = field;
        this.width = width;
    }
}