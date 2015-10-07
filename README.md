# Origin

Primer is the CSS toolkit that powers GitHub's front-end design. It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely *GitHubby*. It's built with SCSS and available via Bower, so it's easy to include all or part of it within your own project.

[**Read the Primer documentation**](http://primercss.io) to learn more.

_**Heads up!** We love open source, but Primer is unlikely to add new features that are not used in GitHub.com. It's first and foremost our CSS toolkit. We really love to share though, so hopefully that means we're still friends <3._

## Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
  - [Dependencies](#dependencies)
  - [Running locally](#running-locally)
  - [Publishing](#publishing)
  - [Primer stats](#primer-stats)
- [Updating](#updating)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)

## Install

Prerequisites:[Node.js and npm](http://nodejs.org/download/)

```
git clone --depth 1 --origin source git@github.com:fac/fa-origin.git new-project-folder
bundle install
npm install
npm install -g grunt-cli
bower install
```

### Run locally

From the Terminal, start a local Jekyll server:

```bash
$ bundle exec jekyll serve
```

Visit [http://localhost:4000/origin/](http://localhost:4000/origin/) in your browser.

Optionally, open a second Terminal tab to automatically update our [Primer stats file](#primer-stats):

```bash
$ grunt watch
```


## Documentation

Primer's documentation is built with Jekyll and published to `http://primercss.io` via the `gh-pages` branch.


### Publishing

Use the included Grunt task to generate and publish Primer's docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.

### Primer stats

When compiling or watching the Sass files, Primer will automatically generate a `.primer-stats.md` file. This is tracked in the Git repository to provide us historical and contextual information on the changes we introduce. For example, we'll know when the number of selectors or declarations rises sharply within a single change.

## Updating

Within `bower.json`, update to a new release by changing the version number that follows the `#` in the dependency URL.

```json
{
  "name": "myapp",
  "dependencies": {
    "primer-css": "x.x.x"
  }
}
```

To pull down the updated package, `cd` into `vendor/assets`, and run `bower install`.

```
$ cd vendor/assets
$ bower install
```

Check in `bower.json` and all changes under `vendor/assets/bower_components`.

## Development

Development of Primer happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/primer/primer/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

## Contributing

By contributing to Primer, you agree to the terms presented in [this license agreement](https://cla.github.com/). *More information will be provided here soon.*

When contributing changes to Primer, be sure to do the following steps when opening a pull request:

1. Bump the version number in `bower.json` (it's purely placebo right now, but it's good habit) and `package.json`.
2. Run `grunt` and commit the changes. This compiles the SCSS to CSS so we can do basic analysis on the number of selectors, file size, etc.

In addition, please read through our [contributing guidelines](https://github.com/primer/primer/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

All HTML and CSS should conform to the [style guidelines](http://primercss.io/guidelines).

Editor preferences are available in the [editor config](https://github.com/primer/primer/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Primer is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

Created by and copyright GitHub, Inc. Released under the [MIT license](LICENSE.md).
