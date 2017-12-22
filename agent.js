const fetch = require('node-fetch');
const {load} = require('@commitlint/core');

main()
    .catch(err => {
        throw err;
    });

async function main() {
    const payload = {
        config: await load({}, {cwd: process.cwd()}),
        PULL_REQUEST_SHA: process.env.TRAVIS_PULL_REQUEST_SHA,
        PULL_REQUEST_NUMBER: parseInt(process.env.TRAVIS_PULL_REQUEST, 10),
        REPO_SLUG: process.env.TRAVIS_REPO_SLUG
    };

    await fetch('http://marneb.localtunnel.me/commitlint-bot/config', {
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });
}