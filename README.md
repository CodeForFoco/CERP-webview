# CERP-webview

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

As a small note, if aren't using `node 6.11.4` and `npm@3.10.10` it may not build.  NVM or docker are decent choices for getting everything to work.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
# Please be sure to have cloned CERP-backend,
# as the build expects the directory
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Additional notes:

The only file that needs to be changed is:

`src/config.js`

There are three options:

1. API_LOCATION: 'http://localhost:5000'
2. API_LOCATION: ''
3. API_LOCATION: 'https://cerp-code-foco.herokuapp.com'

* Use 1 if you are planning on making changes to both the front end and back end (you'll need to start the pythons server)
* Use 2 if you are building for production DONT FORGET TO CHANGE CONFIG TO THIS IF BUILDING FOR PRODUCTION
* Use 3 if you are planning on making changes to the front end, and don't want to start up the local dev server
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
[backend]:https://github.com/CodeForFoco/CERP-backend  
