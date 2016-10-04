/**
 * Created by User on 9/30/2016.
 */

export class RoutingParameters
{
    id:any;
    cid:any;

    params:Array<string> = [ "id", "cid" ];

}

export class NameValueDto
{
    name:string;
    value:any;

    constructor( name:string, value:any )
    {
        this.name = name;
        this.value = value;
    }
}

export class BasicDto extends NameValueDto
{
    id:number;
    title:string;
    description:string;
    flag:any;

    constructor( id:number, title:string, description:string, value:any, name:string, flag:any )
    {
        super ( name, value );

        this.id = id;
        this.title = title;
        this.description = description;
        this.flag = flag;
    }
}

export class GlyphiconDto extends  BasicDto {

    icon:string;

    constructor(id: number, name: string, flag: any, icon: string ) {
        super ( id, name, null, flag,  name, flag );
        this.icon = "glyphicon glyphicon-" + icon;
    }
}