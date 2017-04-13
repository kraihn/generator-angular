'use strict';
const Generator = require('yeoman-generator');
const s = require('underscore.string');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('name', {require: true});
    this.option('directory', {default: 'REPLACE_ME', alias: 'dir', type: String});
  }

  writing() {
    const directoryName = this.options.directory === 'REPLACE_ME' ? this.options.name : this.options.directory;

    this.fs.copyTpl(
      this.templatePath('.angular-cli.json'),
      this.destinationPath(directoryName + '/.angular-cli.json'),
      {appName: s.dasherize(this.options.name)}
    );
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath(directoryName + '/.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(directoryName + '/.gitignore')
    );

    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath(directoryName),
      {appName: s.dasherize(this.options.name)}
    );
  }
};
