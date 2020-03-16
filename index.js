
const core = require('@actions/core');
const action = require('./action.js');

const apiKey = core.getInput('apiKey', { required: true });
const destination = core.getInput('destination', { required: true });
var format = core.getInput('format');
if(!format || format === '') {
    format = 'json';
}

var failIfNotChanged = core.getInput('failIfNotChanged');
if(!failIfNotChanged || failIfNotChanged === '') {
    failIfNotChanged = false;
} else {
    failIfNotChanged = !!failIfNotChanged;
}

action({ apiKey, destination, format, failIfNotChanged })
    .then(function(count) {
        core.setOutput('count', count.toString());
    })
    .catch(function(error) {
        core.setFailed((error && error.message) || error || "Unknown error");
    });
