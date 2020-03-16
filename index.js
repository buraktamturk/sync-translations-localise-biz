
const core = require('@actions/core');
const action = require('./action.js');

const apiKey = core.getInput('secret', { required: true });
const destination = core.getInput('destination', { required: true });
const format = core.getInput('format');
if(!format || format === '') {
    format = 'json';
}

const failIfNotChanged = core.getInput('failIfNotChanged');
if(!failIfNotChanged || failIfNotChanged === '') {
    failIfNotChanged = false;
} else {
    failIfNotChanged = !!failIfNotChanged;
}

action({ apiKey, destination, format, failIfNotChanged })
    .then(function(count) {
        core.setOutput('count', count);
    })
    .catch(function(error) {
        core.setFailed(error.message);
    });
