# Origin

Origin is FreeAgent’s internal CSS framework. These global principles, patterns, and properties mean we can do better work faster.

[View the docs](http://fac.github.io/origin/)

Origin is comprised of these main bits:

* Utilities: our global design properties and CSS for using them
* Components: building blocks of our interfaces. Self-contained units serving specific functions.
* Guidance: a layer of documentation covering broad principles, specifics of code style, naming conventions, and more.

We use Origin across our desktop app, mobile apps, website, and other projects. This not only helps create a familiar experience for customers, but makes improves our development process.


## Contents

- [Install](#install)
- [Documentation](#documentation)
- [Distribution](#distribution)
- [Publishing](#publishing)
- [Implementing Origin into a project](#implementing-origin-into-a-project)
- [Contributing](#contributing)
- [License](#license)


## Install

Following these steps will install Origin and it’s docs locally, and allow you to push documentation changes to GitHub Pages.

**If you want to implement Origin into a project and don’t want the documentation, [follow these instructions](#implementing-origin-into-a-project)**

Prerequisites: Ruby 2.1, [Bundler](http://bundler.io/), [Node.js](http://nodejs.org/download/)

```bash
$ git clone git@github.com:fac/origin.git
$ cd origin
$ chruby ruby-2.1.2 (or whatever your non-system version of Ruby is)
$ bundle install
$ npm install
$ npm install -g grunt-cli (if you don’t already have Grunt installed)
```


## Documentation

Origin’s documentation is built with Jekyll and Grunt. How to run it locally:

```bash
$ grunt
```

In a new terminal window, run Browsersync for live reloads, synced up browsing and scrolling:

```bash
$ grunt sync
```

A new browser tab should open automatically to `http://localhost:9001/origin/`.

Running the docs locally gives us our sandbox for trying new ideas and approaches before considering them for deployment. It’s our “kitchen sink” view of our utilities and components.

Aside from Jekyll’s [`_config.yml`](https://github.com/fac/origin/blob/master/_config.yml) and Grunt’s [`Gruntfile.js`](https://github.com/fac/origin/blob/master/Gruntfile.js), all files related to documentation live in [`/docs`](https://github.com/fac/origin/tree/master/docs).

The docs don't run at root because when published to GitHub Pages they lives at `/origin`. There is an established workaround for this, but it’s not applicable to sites where the Jekyll source is anywhere other than the root directory, and ours lives in `/docs`.


## Distribution

Origin is distributed via [npm](https://www.npmjs.com/package/origin-css). Only a small number of files in the repo are actually published to npm. Only those required to implement Origin into other projects — it doesn't include the documentation layer.

[`.npmignore`](https://github.com/fac/origin/blob/master/.npmignore) defines what’s hidden from npm in the same way a `.gitignore` file does.

Changes are published to npm using `npm publish`, and can only be done by [owners](https://www.npmjs.com/package/origin-css/access).


### Publishing

Use the included Grunt task to generate and publish Origin’s docs to http://fac.github.io/origin/:

```bash
$ grunt publish
```

This takes the `_site` directory, generates its own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.


## Implementing Origin into a project

These instructions assume you’re implementing Origin into a new or existing project. Origin is installed via npm, and assumes your project already has mechanisms in place for compiling Sass.

Requirements: [Node.js and npm](http://nodejs.org/download/).

```bash
$ cd <your-project-directory>
$ npm install origin-css --save
```

This will add the Origin files to a new `origin-css` directory inside the `node_modules` directory at the root of your project, and save `origin-css` as a dependency in your `package.json` file.

If npm isn’t yet being used in your project, running the above command will create the `node_modules` directory too. You’ll want to [create a package](https://docs.npmjs.com/cli/init) to manage your npm dependencies, and most likely add a new rule to `.gitignore` to ignore the `node_modules` directory unless your project explicitly dictates that you shouldn't.

After installing, do the following:

1. Copy the contents of [/origin-css/assets/scss/local](https://github.com/fac/origin/tree/master/assets/scss/local) to your project’s stylesheet directory. Just the contents, not the directory itself.

2. Open [_utility-settings.scss](https://github.com/fac/origin/blob/master/assets/scss/local/utilities/_utility-settings.scss) and set all utility variables to `false`. These are `true` by default because the Origin docs use them, but each one left as `true` will add weight to your output CSS, so only do so when you need them.

3. Use `origin.scss` as your master stylesheet, or copy it’s contents into your existing master stylesheet. You’ll need to change the paths to suit your project.

If your project already includes [normalize.css](https://github.com/necolas/normalize.css/), delete it, as Origin already includes it.


## Contributing

Development of Origin happens in our primary branch, `master`. For stable versions, see the [releases page](https://github.com/fac/origin/releases). `master` will always be up to date with the latest changes, including those which have yet to be released.

All team members should be contributing back to this repo in order to improve it. All HTML and CSS should conform to the [style guidelines](http://fac.github.io/origin/code-style/).

Editor preferences are available in the [editor config](https://github.com/fac/origin/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


### SCSS Linter

We use [SCSS-Lint](https://github.com/brigade/scss-lint) to catch any formatting or syntax issues with SCSS during development. It’s integrated into our [Gruntfile](https://github.com/fac/origin/blob/master/Gruntfile.js), and will automatically lint `.scss` as soon as they’re saved.

The linter is configured via [`.scss-lint.yml`](https://github.com/fac/origin/blob/master/.scss-lint.yml).  


### Creating a new component

1. Make sure you're up to date with the master branch (`git fetch; git pull origin master`)
2. Branch off master (`git checkout -b <add-amazing-component>`)
3. Create a new `.scss` partial for your component in [`assets/scss/global/components`](https://github.com/fac/origin/tree/master/assets/scss/global/components) and give it a (singular, not plural) name
4. `@import` your partial into [`origin.scss`](https://github.com/fac/origin/blob/master/assets/scss/origin.scss)
5. Create a new `.md` file in [`docs/components`](https://github.com/fac/origin/tree/master/docs/components) that matches your `.scss` partial name, and document examples of all use cases and variants of your component
6. Test that the component renders as expected in all use cases
7. Bump the version numbers in [`_config.yml`](https://github.com/fac/origin/blob/master/_config.yml) and [`package.json`] (it'll be a patch: 1.0.x)
8. Create a new pull request and provide a helpful description of what the component does and why its been created


### Creating a new release

#### Branch off, make changes, create a PR

1. Make sure you're up to date with the master branch (`git fetch; git pull origin master`) and have followed any update instructions contained in [release notes](https://github.com/fac/origin/releases)
2. Branch off master (`git checkout -b <your-branch-name>`) and make your changes
3. Increment the version numbers in [_config.yml](https://github.com/fac/origin/blob/master/_config.yml) and [package.json](https://github.com/fac/origin/blob/master/package.json). Generally: new components, backwards-compatible fixes, and smaller amendments to existing code are patches, breaking changes count as minor releases, and full rewrites are major releases. See [semver.org](http://semver.org/) for detailed guidance.
4. Push up your changes (`git push origin <your-branch-name>`) and write a [helpful pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request) describing your changes

#### Get your PR reviewed, merge to master, create new release

5. Ask a fellow designer or engineer to review your changes. Make any required changes, then merge your branch into master: `git checkout master; git merge --no-ff <your-branch-name>`
6. Push up the new version of master (`git push origin master`).
7. Publish any documentation changes to http://fac.github.io/origin: `grunt publish`
8. [Create a new release](https://help.github.com/articles/creating-releases/) with a useful description. Your original PR is probably a good starting point. **If you’re making breaking changes, provide guidance in the release notes about what people will have to change in their projects**
9. [Publish the NPM package](https://docs.npmjs.com/getting-started/publishing-npm-packages) (`npm publish`). If you don't yet have access to update the npm package, have someone in the design team [add you as an owner](https://docs.npmjs.com/cli/owner).

#### Let people know, consider upgrading other projects

If this a major or minor release, let people in the #design and/or #dev Slack channels know by linking to the release. Consider bringing other projects up to date with your new release, especially [Origin](https://github.com/fac/origin).


## License

Created by and copyright FreeAgent Central Limited. Origin is released under the [MIT license](LICENSE.md). The original documentation format and deployment mechanism of Origin was based on a forked version of [Primer](https://github.com/primer/primer), created by and copyright of GitHub, Inc.
