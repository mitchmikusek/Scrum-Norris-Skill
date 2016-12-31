/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * Scrum Norris Facts skill
 *
 * Simple skill outputting random Scrum Norris Facts
 *
 * This supports multiple lauguages. (en-US, en-GB).
 * Based on example skill here: https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.aaf5bf42-25d5-449c-9c98-7bd4c3970f56";

const languageStrings = {
    'en-US': {
        translation: {
            FACTS: [
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
              "Scrum Norris doesn’t need to be agile. The customer is always satisfied with what Scrum Norris delivers.",
              "When Scrum Norris says done, then it’s done done."
            ],
            SKILL_NAME: 'American Scrum Norris Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Scrum Norris fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        }
    },
    'en-GB': {
        translation: {
            FACTS: [
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
              "Scrum Norris doesn’t need to be agile. The customer is always satisfied with what Scrum Norris delivers.",
              "When Scrum Norris says done, then it’s done done."
            ],
            SKILL_NAME: 'British Scrum Norris Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Scrum Norris fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random Scrum Norris fact from the Scrum Norris facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
