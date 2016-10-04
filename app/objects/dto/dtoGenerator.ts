import {Campaign, Poll, Question, Schedule, DaySlots, Agent, Promotion, CallerId} from "./dtObjects";

export class dtoGenerator
{
  static source = "Lorem ipsum dolor sit amet, euripidis vituperatoribus no quo. Stet malorum sed cu. Pro te recteque reprimique. At nam tritani voluptaria definitiones, omnesque inimicus voluptatum te eos, eam id amet utinam. In pri meliore oporteat scribentur. Ignota graeci commodo duo ex, eos melius moderatius disputationi ei, cu nec eruditi iracundia Temporibus deterruisset no vis, movet definitiones nec ut, no elaboraret interesset has. Eripuit prodesset ea nec, te solum laoreet sit. Ex lobortis disputationi sea, quo cu elit veniam constituam. His meis habemus partiendo ex, eros epicuri vivendum nam ad. Senserit consequat vim ei, vix at aeque omnium molestiae, audiam suscipit voluptatibus mei ei. Autem novum dissentiet an sea, eos possit minimum facilisi eu. Et mnesarchum contentiones mea. Movet utroque scaevola qui eu, clita libris graecis ea vix. Accusata evertitur accommodare sea cu, ut vel nisl aliquam conceptam, iisque laoreet et pro.Mel laoreet verterem nominati in. Eum hendrerit constituam ei, nec nobis labitur adolescens in. Adolescens vituperata scripserit at vis. Eos et semper imperdiet moderatius, ne quaerendum reformidans referrentur vel, aperiam corpora ea duo. Vix porro probatus maiestatis ad. Ne viris atomorum vis, solet periculis ex pro. Sea cu dico dicit persequeris, mutat utroque eos ei. Graece verterem mei id. Malorum perfecto mandamus nec ea. Prompta percipit vivendum sea ex. Sed te audiam impetus accusata, ad vim dolorem fabellas. Persecuti dissentias qui id. Sed ex praesent iudicabit complectitur. Nam at nihil verterem. Erroribus abhorreant argumentum ei vel, sit omnium definitiones ei. No vis error facilisis, admodum deleniti vituperata ex sed. Mollis imperdiet te has, vel ne diam eros oporteat. Ad alia dicant dolorum duo, vix timeam denique salutatus ea. Lorem ipsum dolor sit amet, euripidis vituperatoribus no quo. Stet malorum sed cu. Pro te recteque reprimique. At nam tritani voluptaria definitiones, omnesque inimicus voluptatum te eos, eam id amet utinam. In pri meliore oporteat scribentur. Ignota graeci commodo duo ex, eos melius moderatius disputationi ei, cu nec eruditi iracundia Temporibus deterruisset no vis, movet definitiones nec ut, no elaboraret interesset has. Eripuit prodesset ea nec, te solum laoreet sit. Ex lobortis disputationi sea, quo cu elit veniam constituam. His meis habemus partiendo ex, eros epicuri vivendum nam ad. Senserit consequat vim ei, vix at aeque omnium molestiae, audiam suscipit voluptatibus mei ei. Autem novum dissentiet an sea, eos possit minimum facilisi eu. Et mnesarchum contentiones mea. Movet utroque scaevola qui eu, clita libris graecis ea vix. Accusata evertitur accommodare sea cu, ut vel nisl aliquam conceptam, iisque laoreet et pro.Mel laoreet verterem nominati in. Eum hendrerit constituam ei, nec nobis labitur adolescens in. Adolescens vituperata scripserit at vis. Eos et semper imperdiet moderatius, ne quaerendum reformidans referrentur vel, aperiam corpora ea duo. Vix porro probatus maiestatis ad. Ne viris atomorum vis, solet periculis ex pro. Sea cu dico dicit persequeris, mutat utroque eos ei. Graece verterem mei id. Malorum perfecto mandamus nec ea. Prompta percipit vivendum sea ex. Sed te audiam impetus accusata, ad vim dolorem fabellas. Persecuti dissentias qui id. Sed ex praesent iudicabit complectitur. Nam at nihil verterem. Erroribus abhorreant argumentum ei vel, sit omnium definitiones ei. No vis error facilisis, admodum deleniti vituperata ex sed. Mollis imperdiet te has, vel ne diam eros oporteat. Ad alia dicant dolorum duo, vix timeam denique salutatus ea.Lorem ipsum dolor sit amet, euripidis vituperatoribus no quo. Stet malorum sed cu. Pro te recteque reprimique. At nam tritani voluptaria definitiones, omnesque inimicus voluptatum te eos, eam id amet utinam. In pri meliore oporteat scribentur. Ignota graeci commodo duo ex, eos melius moderatius disputationi ei, cu nec eruditi iracundia Temporibus deterruisset no vis, movet definitiones nec ut, no elaboraret interesset has. Eripuit prodesset ea nec, te solum laoreet sit. Ex lobortis disputationi sea, quo cu elit veniam constituam. His meis habemus partiendo ex, eros epicuri vivendum nam ad. Senserit consequat vim ei, vix at aeque omnium molestiae, audiam suscipit voluptatibus mei ei. Autem novum dissentiet an sea, eos possit minimum facilisi eu. Et mnesarchum contentiones mea. Movet utroque scaevola qui eu, clita libris graecis ea vix. Accusata evertitur accommodare sea cu, ut vel nisl aliquam conceptam, iisque laoreet et pro.Mel laoreet verterem nominati in. Eum hendrerit constituam ei, nec nobis labitur adolescens in. Adolescens vituperata scripserit at vis. Eos et semper imperdiet moderatius, ne quaerendum reformidans referrentur vel, aperiam corpora ea duo. Vix porro probatus maiestatis ad. Ne viris atomorum vis, solet periculis ex pro. Sea cu dico dicit persequeris, mutat utroque eos ei. Graece verterem mei id. Malorum perfecto mandamus nec ea. Prompta percipit vivendum sea ex. Sed te audiam impetus accusata, ad vim dolorem fabellas. Persecuti dissentias qui id. Sed ex praesent iudicabit complectitur. Nam at nihil verterem. Erroribus abhorreant argumentum ei vel, sit omnium definitiones ei. No vis error facilisis, admodum deleniti vituperata ex sed. Mollis imperdiet te has, vel ne diam eros oporteat. Ad alia dicant dolorum duo, vix timeam denique salutatus ea.";

  static generateId ():number
  {
    return Math.floor( Math.random()*10000 );
  }

  static generateText ( length:number ):string
  {
    let start:number = 10 + Math.floor( Math.random()*500 );
    let string:string = this.source.substr(start, length);
    if ( string.charAt(0) == "" || string.charAt(0) == "," || string.charAt(0) == "." )
    {
      return "A " + string;
    }

    string = string.charAt(0).toUpperCase() + string.substr(1);

    return string;
  }
}

export class MockCampaign
{
  static create ():Campaign
  {
    let campaign:Campaign = new Campaign();
    campaign.id = dtoGenerator.generateId();
    campaign.title = dtoGenerator.generateText ( 50 );
    campaign.description = dtoGenerator.generateText ( 80 );
    campaign.startDate = "20161004";
    campaign.endDate = "20161222"

    for ( var q=0; q< 3; q++ )
    {
      let agent:Agent = new Agent();
      agent.id = dtoGenerator.generateId();
      agent.title= dtoGenerator.generateText ( 100 );
      agent.description= dtoGenerator.generateText ( 550 );
      agent.phone = ( 500 + Math.floor( Math.random()*100 ) + "") + ( 500 + Math.floor( Math.random()*100 ) + "") + ( 5000 + Math.floor( Math.random()*3000 ) + "");
      campaign.agents.push(agent);
    }

    for ( var q=0; q< 3; q++ )
    {
      let schedule:Schedule = new Schedule();
      schedule.id = dtoGenerator.generateId();
      schedule.title= dtoGenerator.generateText ( 100 );
      schedule.description= dtoGenerator.generateText ( 550 );
      schedule.startDate = "20161012";
      schedule.endDate = "20161022"
      let slots:Array<string> = [];
      slots.push( "0900" );
      slots.push( "1400" );
      let dslots:DaySlots = new DaySlots();
      dslots.slots = slots;
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      schedule.slots.push ( dslots );
      campaign.schedules.push( schedule );
    }

      for ( var i=0; i< 2; i++ )
      {
          let callerid:CallerId = new CallerId();
          callerid.id = dtoGenerator.generateId();
          callerid.value = ( 500 + Math.floor( Math.random()*100 ) + "") + ( 500 + Math.floor( Math.random()*100 ) + "") + ( 5000 + Math.floor( Math.random()*3000 ) + "");
          callerid.description = dtoGenerator.generateText ( 550 );
          campaign.callerids.push ( callerid );
      }

    for ( var i=0; i< 4; i++ )
    {
      let poll:Poll = new Poll();
      poll.id = dtoGenerator.generateId();
      poll.title = dtoGenerator.generateText ( 150 );
      poll.description = dtoGenerator.generateText ( 550 );

      for ( var q=0; q< 3; q++ )
      {
        let question:Question = new Question();
        question.id = dtoGenerator.generateId();
        question.question =  dtoGenerator.generateText ( 300 ) + "?";
        for ( var o=0; o< 3; o++ )
        {
          question.options.push( dtoGenerator.generateText ( 100 ) );
        }
        question.answer = dtoGenerator.generateText ( 100 );
        poll.questions.push ( question );
      }
      campaign.polls.push( poll );
    }

    /*
      let promotion:Promotion = new Promotion();
      promotion.id = dtoGenerator.generateId();
      promotion.title = dtoGenerator.generateText ( 150 );
      promotion.description = dtoGenerator.generateText ( 550 );
      promotion.poll = campaign.polls[0];
      promotion.agents = [ campaign.agents[0] ];
      campaign.promotions.push ( promotion );
    */
    //
    return campaign;

  }
}


