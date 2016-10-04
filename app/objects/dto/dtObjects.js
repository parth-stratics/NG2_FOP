/**
 * Created by User on 9/16/2016.
 */
"use strict";
var Campaign = (function () {
    function Campaign() {
        this.id = 0;
        this.callerids = new Array();
        this.polls = new Array();
        this.schedules = new Array();
        this.agents = new Array();
        this.audioRecordings = new Array();
        this.promotions = new Array();
    }
    return Campaign;
}());
exports.Campaign = Campaign;
var CallerId = (function () {
    function CallerId() {
    }
    return CallerId;
}());
exports.CallerId = CallerId;
var Promotion = (function () {
    function Promotion() {
    }
    return Promotion;
}());
exports.Promotion = Promotion;
var IVR = (function () {
    function IVR() {
    }
    return IVR;
}());
exports.IVR = IVR;
var AudioRecording = (function () {
    function AudioRecording() {
    }
    return AudioRecording;
}());
exports.AudioRecording = AudioRecording;
var Poll = (function () {
    function Poll() {
        this.questions = Array();
    }
    return Poll;
}());
exports.Poll = Poll;
var Question = (function () {
    function Question() {
        this.options = new Array();
    }
    return Question;
}());
exports.Question = Question;
var Schedule = (function () {
    function Schedule() {
        this.slots = new Array();
    }
    return Schedule;
}());
exports.Schedule = Schedule;
var DaySlots = (function () {
    function DaySlots() {
    }
    return DaySlots;
}());
exports.DaySlots = DaySlots;
var Agent = (function () {
    function Agent() {
    }
    return Agent;
}());
exports.Agent = Agent;
var Meeting = (function () {
    function Meeting() {
        this.title = "Town Hall Meeting";
    }
    return Meeting;
}());
exports.Meeting = Meeting;
var Participant = (function () {
    function Participant() {
    }
    return Participant;
}());
exports.Participant = Participant;
var AgendaItem = (function () {
    function AgendaItem() {
    }
    return AgendaItem;
}());
exports.AgendaItem = AgendaItem;
(function (ParticipantType) {
    ParticipantType[ParticipantType["MODERATOR"] = 0] = "MODERATOR";
    ParticipantType[ParticipantType["PANELIST"] = 1] = "PANELIST";
    ParticipantType[ParticipantType["FACILITATOR"] = 2] = "FACILITATOR";
})(exports.ParticipantType || (exports.ParticipantType = {}));
var ParticipantType = exports.ParticipantType;
(function (ParticipantStatus) {
    ParticipantStatus[ParticipantStatus["INVITED"] = 0] = "INVITED";
    ParticipantStatus[ParticipantStatus["TENTATIVE"] = 1] = "TENTATIVE";
    ParticipantStatus[ParticipantStatus["CONFIRMED"] = 2] = "CONFIRMED";
    ParticipantStatus[ParticipantStatus["CANCELLED"] = 3] = "CANCELLED";
})(exports.ParticipantStatus || (exports.ParticipantStatus = {}));
var ParticipantStatus = exports.ParticipantStatus;
(function (AgendaType) {
    AgendaType[AgendaType["INTRODUCTION"] = 0] = "INTRODUCTION";
    AgendaType[AgendaType["PRESENTATION"] = 1] = "PRESENTATION";
    AgendaType[AgendaType["DEBATE"] = 2] = "DEBATE";
    AgendaType[AgendaType["DISCUSSION"] = 3] = "DISCUSSION";
    AgendaType[AgendaType["QANDA"] = 4] = "QANDA";
    AgendaType[AgendaType["SUMMATION"] = 5] = "SUMMATION";
})(exports.AgendaType || (exports.AgendaType = {}));
var AgendaType = exports.AgendaType;
//# sourceMappingURL=dtObjects.js.map