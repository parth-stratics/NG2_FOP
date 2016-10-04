/**
 * Created by User on 9/16/2016.
 */

export class Campaign {
  id: number=0;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  goals: string;
  callerids:Array<CallerId> = new Array<CallerId>();
  polls:Array<Poll> = new Array<Poll>();
  schedules:Array<Schedule> = new Array<Schedule>();
  agents:Array<Agent> = new Array<Agent>();
  audioRecordings:Array<AudioRecording> = new Array<AudioRecording>();
  promotions:Array<Promotion> = new Array<Promotion>();
}

export class CallerId
{
  id:number;
  value:string;
  description:string;
}

export class Promotion
{
  id:number;
  title:string;
  description:string;
  type:string;

  poll:Poll;
  ivr:IVR;
  schedule:Array<DaySlots>;
  agents:Array<Agent>;
  audioRecordings:Array<AudioRecording>;

}

export class IVR
{
  id:number;
  title:string;
  description:string;
  questions:Array<Question>;
}

export class AudioRecording
{
  id:number;
  title:string;
  description:string;
  source:string;
}

export class Poll
{
  id:number;
  title:string;
  description:string;
  questions:Array<Question> = Array<Question>();
}

export class Question
{
  id:number;
  question:string;
  options:Array<string> = new Array<string>();
  answer:string;
}

export class Schedule
{
  id:number;
  title:string;
  description:string;
  startDate:string;
  endDate:string;

  slots:Array<DaySlots> = new Array<DaySlots>();
}

export class DaySlots
{
  //start and end time pairs
  slots:Array<string>;
}

export class Agent
{
  id:number;
  title:string;
  description:string;
  phone:string;
}



export class Meeting
{
  id:number;
  title:string = "Town Hall Meeting";
  description:string;
  startDate:string;
  endDate:string;
  participants:Array<Participant>;

}

export class Participant
{
  id:number;
  firstName:string;
  lastName:string;
  profile:string;
  type:ParticipantType;
  email:string;
  status:ParticipantStatus;
}

export class AgendaItem
{
  id:number;
  title:string;
  description:string;
  startDate:string;
  endDate:string;
  type:AgendaType;
  participants:Array<Participant>;
}

export enum ParticipantType
{
  MODERATOR,
  PANELIST,
  FACILITATOR
}

export enum ParticipantStatus
{
  INVITED,
  TENTATIVE,
  CONFIRMED ,
  CANCELLED
}

export enum AgendaType
{
  INTRODUCTION,
  PRESENTATION,
  DEBATE,
  DISCUSSION,
  QANDA,
  SUMMATION
}
