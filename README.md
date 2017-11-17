# CERP-webview

[![Build Status](https://travis-ci.org/CodeForFoco/CERP-webview.svg?branch=master)](https://travis-ci.org/CodeForFoco/CERP-webview)
[![Coverage Status](https://coveralls.io/repos/github/CodeForFoco/CERP-webview/badge.svg?branch=master)](https://coveralls.io/github/CodeForFoco/CERP-webview?branch=master)

> The webview for the CERP project.
> See [CERP-backend][backend] for the backened.

Community Elections Resources and Polling Tool

Provide information on local elections, politicians, issues, and political outcomes. Visualize and share results.

Election information should be available to citizens in an easy to understand, fun to explore, and overall interesting way so that our community can better understand itself and its political past, present, and future.

#### Election Information

Larimer County provides information about elections at a precinct level, but the information is provided as a table of statistics. We are striving to improve the explorability of the data by building a website that lets Larimer County citizens view results on a map, compare precincts, and discover ways to reach out to elected officials.

#### Detailed Project Requirements

1. Show election information on a heat map of precincts in Larimer County.
2. Display all election outcomes for a precinct on the same page.
3. Allow different "views" of the data to be shared via hyperlinks.

## Getting Started

For a detailed explanation on how things work, check out the [guide](vue-webpack) and [docs for vue-loader](vue-loader-docs).

### Initial Steps

These steps only need to be performed once.

#### Verify Required Applications

If you aren't using `node 6.11.4` and `npm@3.10.10`, your project may not build correctly.  If that is the case, consider using [nvm][nvm] or [Docker][docker] as an alternative to actually installing a [different version of Node][node-releases] on your machine.

#### Dependencies/Packages

Install `npm` dependencies:

``` bash
npm install
```

#### Set the API Source

In *src/config.js*, uncomment the applicable option (and comment the other two) for `API_LOCATION`:

| Option                                 | Scenario                                                                                     |
|----------------------------------------|----------------------------------------------------------------------------------------------|
| `http://localhost:5000`                | Front **AND** back end development (be sure to [start the Python server][backend-serve] first)   |
| `https://cerp-code-foco.herokuapp.com` | **Front** end development                                                                        |
| `''`                                   | Building for **production**. *DON'T FORGET TO CHANGE CONFIG TO THIS IF BUILDING FOR PRODUCTION.* |

## Developing

Once you have completed the initial setup steps above, follow these instructions to start developing.

### Start the Server

To start a local web server with hot reload (browser will refresh automatically when files are changed) at [localhost:8080](http://localhost:8080):

``` bash
npm run dev
```

### Running Tests

Several commands exist for periodically running various tests on the code:

- **Unit:** `npm run unit`
- **e2e:** `npm run e2e`
- **All:** `npm test`

### Building and Testing

Building the project is a step for individuals responsible for updating the production environment. Before running these steps, please be sure you have cloned [CERP-backend][backend] as the build expects the directory.

To periodically build the project for production with minification:

```bash
npm run build
```

Or, to build for production and view the bundle analyzer report:

```bash
npm run build --report
```

## Contributing

We welcome new contributors.  Be sure to check out guide on [contributing][contributing], which includes instructions on how to fork, clone, branch, commit, pull request and sync your fork.

Not sure where to start? Look for [open issues][githubissue] on GitHub, or message the team on [our Slack site][slack]. If you aren't on our Slack, [click here for an invite][slackinvite].

TL;DR Contribution Workflow:

1. [Fork][fork] this repository and Clone your fork locally.
1. Checkout a new branch on which to make your changes.
1. Make edits. Try to match existing coding style.
1. Test your changes.
1. Commit your changes. Push your changes to your fork on GitHub.
1. Submit a new [pull request][pullrequest] and your changes will be reviewed and merged.


## Bugs / Feedback / Suggestions

We encourage you to [open up an issue][newissue] if you have any feedback, suggestions or bugs.

## License

MIT, see [LICENSE](/LICENSE) for full license.

[slack]: https://codeforfoco.slack.com/
[slackinvite]: https://codeforfocoslack.herokuapp.com
[fork]: https://help.github.com/articles/fork-a-repo/
[forkthisrepo]: https://github.com/CodeForFoco/CERP-webview#fork-destination-box
[contributing]: https://github.com/CodeForFoco/org/blob/master/CONTRIBUTING.md
[githubissue]: https://github.com/CodeForFoco/CERP-webview/issues
[newissue]: https://github.com/CodeForFoco/CERP-webview/issues/new
[pullrequest]: https://github.com/CodeForFoco/CERP-webview/pulls
[backend]: https://github.com/CodeForFoco/CERP-backend
[backend-serve]: https://github.com/CodeForFoco/CERP-backend#start-the-server
[docker]: https://www.docker.com/
[nvm]: https://github.com/creationix/nvm
[node-releases]: https://nodejs.org/en/download/releases/
[vue-webpack]: http://vuejs-templates.github.io/webpack/
[vue-loader-docs]: http://vuejs.github.io/vue-loader
