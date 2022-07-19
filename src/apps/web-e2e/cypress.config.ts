import { defineConfig } from 'cypress';
import cucumber from 'cypress-cucumber-preprocessor';
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'support/index.ts',
    specPattern: '__tests__/*.feature',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      on('file:preprocessor', file => {
        if (file.filePath.includes('.feature')) {
          return cucumber({
            ...browserify.defaultOptions,
            typescript: resolve.sync('typescript', {
              basedir: config.projectRoot,
            }),
          })(file);
        }
        return require('@cypress/code-coverage/use-babelrc')(
          file,
        );
      });
      return config;
    },
  },
});
