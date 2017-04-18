const fs = require('fs');


var angularCliJson = require('../generators/site/templates/.angular-cli.json');
angularCliJson.project.name = '<%= appName %>';
fs.writeFile('./generators/site/templates/.angular-cli.json', JSON.stringify(angularCliJson, undefined, 2));

var packageJson = require('../generators/site/templates/package.json');
packageJson.name = '<%= appName %>';
fs.writeFile('generators/site/templates/package.json', JSON.stringify(packageJson, undefined, 2));

var indexHtml = fs.readFileSync('./generators/site/templates/src/index.html', 'utf8');
indexHtml = indexHtml.replace("Seed", "<%= appTitle %>");
fs.writeFile('./generators/site/templates/src/index.html', indexHtml);

var e2eSpec = fs.readFileSync('./generators/site/templates/e2e/app.e2e-spec.ts', 'utf8');
e2eSpec = e2eSpec.replace(/seed/g, "<%= appName %>");
e2eSpec = e2eSpec.replace(/Seed/g, "<%= appTitle %>");
fs.writeFile('./generators/site/templates/e2e/app.e2e-spec.ts', e2eSpec);

var poTest = fs.readFileSync('./generators/site/templates/e2e/app.po.ts', 'utf8');
poTest = poTest.replace(/Seed/g, "<%= appTitle %>");
fs.writeFile('./generators/site/templates/e2e/app.po.ts', poTest);

var readme = fs.readFileSync('./generators/site/templates/README.md', 'utf8');
readme = readme.replace(/Seed/g, "<%= appTitle %>");
fs.writeFile('./generators/site/templates/README.md', readme);
