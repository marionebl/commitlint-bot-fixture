module.exports = {
    bot: {
        mode: 'squash'
    },
    extends: [
        '@commitlint/config-conventional', 
        '@commitlint/config-lerna-scopes'
    ]
}
