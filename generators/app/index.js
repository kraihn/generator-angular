'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {require: true});
    this.option('directory', {default: 'REPLACE_ME', alias: 'dir', type: String});
  }

  writing() {
    const directoryName = this.options.directory === 'REPLACE_ME' ? this.options.name : this.options.directory;

    this.composeWith(require.resolve('../site'), {
      directory: directoryName,
      arguments: [this.options.name]
    });
  }
};
