// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*declare function require(moduleName: string): any;
const { version: appVersion } = require('../../package.json');*/

export const environment = {
  API_URL: 'http://localhost:8080/api/v1',
  STATE_LIST: 'http://localhost:4200/assets/states.json',
  APP_VERSION: 'v1/',
  production: false,
  // version: appVersion
};
