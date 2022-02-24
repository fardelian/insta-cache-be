const packageJson = require('../package.json');

console.log('Validating package.json dependency versions.');

const EXPECTED_VERSION_REGEX = /^\d+\./;

const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

const invalidDepNames = Object.keys(allDeps)
    .filter((depName) => !EXPECTED_VERSION_REGEX.test(allDeps[depName]));

if (invalidDepNames.length) {
  console.error(`
Dependency versions in package.json must be exact. Eg, instead of ^1.2.3 you should use 1.2.3
The following package versions are invalid:

${invalidDepNames
      .map((depName) => `${depName}: ${allDeps[depName]}`)
      .join('\n')}
`);
  process.exit(1);
}

console.log('package.json versions are ok.');
