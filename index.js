'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.aaf5bf42-25d5-449c-9c98-7bd4c3970f56";
var SKILL_NAME = 'Scrum Norris';

/**
 * Array containing Scrum Norris facts.
 */
var FACTS = [
    "Scrum Norris is ScrumMaster and ProductOwner – simultaneously.",
    "Scrum Norris can do 6-month sprints.",
    "Scrum Norris wears time-boxer shorts",
    "Scrum Norris does not move story cards, he moves the taskboard.",
    "Scrum Norris does not estimate, he knows.",
    "Scrum Norris does pair programming alone.",
    "Scrum Norris starts project with a Roundhouse-Kickoff.",
    "Scrum Norris is allowed to appear late at the stand-up.",
    "Scrum Norris sits down for stand-up",
    "Scrum Norris implements everything during the sprint planning meeting.",
    "Scrum Norris writes the code first, then the test.",
    "Scrum Norris is not afraid of bugs, bugs are afraid of him.",
    "Scrum Norris does not limit work-in-progress. He has no limits.",
    "Scrum Norris does not deploy, he develops directly on production.",
    "Scrum Norris answers only the first 2 questions for standup. He has no impediments.",
    "Scrum Norris starts each project with a Roundhouse-Kickoff.",
    "Scrum Norris iterates only once.",
    "Scrum Norris does not do Kanban. He does not know limits.",
    "Scrum Norris doesn’t work in time boxes. No box can constrain him.",
    "Scrum Norris doesn’t follow a test plan, the test plan bends to his will.",
    "Scrum Norris is the primary measure of progress.",
    "Scrum Norris’ sprint goal: Be more like Scrum Norris",
    "The best architectures look exactly like Scrum Norris",
    "Chuck Norris doesn’t need to be agile. The customer is always satisfied with what Chuck Norris delivers.",
    "When Scrum Norris says done, then it’s done done."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Scrum Norris fact from the scrum norris facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a Scrum Norris fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
