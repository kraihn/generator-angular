'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

function siteFiles() {
  return [
    'e2e/app.e2e-spec.ts',
    'e2e/app.po.ts',
    'e2e/tsconfig.e2e.json',
    'src/app/app.component.html',
    'src/app/app.component.scss',
    'src/app/app.component.spec.ts',
    'src/app/app.component.ts',
    'src/app/app.module.ts',
    'src/app/app-routing.module.ts',
    'src/assets/.gitkeep',
    'src/environments/environment.prod.ts',
    'src/environments/environment.ts',
    'src/favicon.ico',
    'src/index.html',
    'src/main.ts',
    'src/polyfills.ts',
    'src/styles.scss',
    'src/test.ts',
    'src/tsconfig.app.json',
    'src/tsconfig.spec.json',
    'src/typings.d.ts',
    '.angular-cli.json',
    '.editorconfig',
    '.gitignore',
    'karma.conf.js',
    'package.json',
    'protractor.conf.js',
    'README.md',
    'tsconfig.json',
    'tslint.json'
  ];
}

describe('@kraihn/generator-angular:site', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/site'))
      .withArguments(['.'])
      .toPromise();
  });

  it('creates files', function () {
    assert.file(siteFiles());
  });
});
