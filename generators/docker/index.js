'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('directory', {default: '.', alias: 'dir', type: String});
  }

  writing() {
    this.fs.copy(
      this.templatePath('.dockerignore'),
      this.destinationPath(this.options.directory + '/.dockerignore')
    );
    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath(this.options.directory + '/Dockerfile')
    );
  }
};
