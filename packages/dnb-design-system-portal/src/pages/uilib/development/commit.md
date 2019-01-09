---
header: 'UI Library'
title: 'Commit'
draft: false
order: 2
---

# Commit

**Make sure You follow [Semantic Versioning](https://semver.org)**

Version numbers are handled automatically by using [semantic-release](https://github.com/semantic-release/semantic-release#readme).

## Commit Messages

Make sure to decorate Your **commit messages** with either [commit message format](https://github.com/semantic-release/semantic-release#commit-message-format) or simply use the following three methods:

- `major: breaking change in API`
- `minor: this is a new feature`
- `fix: an example fix message`

## Committing changes

During a commit (locally), Your commit content (code) will be tested with both Static and Integration tests. You may run `yarn test` or `yarn test:update` before You try to commit. You may also write new tests for Your code before committing.

The Code Base is based on several Static Tests to help the code to be uniform:

- Prettier
- ESLint
- StyleLint

You may consider to install Plugins for You Editor of choice - to visualize and run the code formatters and linters based on the given config files. This way You can immediately see how the code will and have to consist.