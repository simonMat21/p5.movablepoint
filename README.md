# p5.js Addon Templates

This project provides a number of templates for starting your own p5.js addon for extending the functionaliteis of p5.js.

## Usage
To use one of the templates, run `npm create p5.js-addon` then follow the provided prompts.

You should replace the various references to the addon name within this project to the name of your addon:

* `src/main.js` - Rename `addonTemplate`
* `rollup.config.js` - Rename `addonTemplate`
* `package.json` - Rename `addonTemplate` and `p5.js-addon-template`
* `examples/` - Populate with your own examples

After that you can continue to write relevant code for your addon using `src/main.js` as the entry point. You may add additional files or NPM dependencies as necessary.

[Rollup](https://rollupjs.org/) has been setup to build the addon into the `dist` folder as both IIFE format to be used with browser script tags and ESM format to be imported by other JavaScript files and publishing on NPM.

For more documentation on how to write addon libraries, please checkout the relevant documentation [here](https://beta.p5js.org/contribute/creating_libraries/)