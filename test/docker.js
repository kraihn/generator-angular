'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('@kraihn/generator-angular:docker', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../generators/docker'))
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.dockerignore',
      'Dockerfile'
    ]);
  });
});
