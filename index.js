
const core = require('@actions/core');
const action = require('./action.js');

const apiKey = core.getInput('secret');
const destination = core.getInput('destination');
const format = core.getInput('format');
const failIfNotChanged = core.getInput('failIfNotChanged');

action({ apiKey, destination, format, failIfNotChanged })
    .then(function(count) {
        core.setOutput('count', count);
    })
    .catch(function(error) {
        core.setFailed(error.message);
    });
