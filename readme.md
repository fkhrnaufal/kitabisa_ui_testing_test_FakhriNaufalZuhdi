
# WebDriverIO Automation Testing for Salingjaga 


## Prerequisites

Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (v6 or later)

## Installation

1. Clone the repository (or create a new directory for your project):
    ```bash
    mkdir kitabisa_ui_testing_test_FakhriNaufalZuhdi
    cd kitabisa_ui_testing_test_FakhriNaufalZuhdi
    ```

2. Initialize the project:
    ```bash
    npm init -y
    ```

3. Install required dependencies:
    ```bash
    npm install --save-dev chai @types/chai @wdio/cli@9.4.5 @wdio/local-runner@9.4.5 @wdio/mocha-framework@9.4.4 ts-node@10.9.2 typescript@5.7.2 webdriverio@9.4.5 chromedriver
    ```

## Configuration

1. Generate the WebDriverIO configuration file using the CLI:
    ```bash
    npx wdio config
    ```

2. Choose the following options during setup:
    - Test Framework: **Mocha**
    - TypeScript: **Yes**
    - Test location: `./test`
    - Reporter: **spec**
    - Browser: **chromedriver**
    - Headless: **No** (optional)

3. Modify the `wdio.conf.ts` to:

### Example `wdio.conf.ts`:

```typescript
import { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/**/*.ts'],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
    }
  }],
  logLevel: 'info',
  baseUrl: 'https://salingjaga.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  typescript: {
    compile: true
  }
};
```

## Running Tests

Run the test using:

```bash
npx wdio run wdio.conf.ts
```

## Project Structure

```
salingjaga-automation/
├── node_modules/
├── test/
│   └── homePage.spec.ts
├── .gitignore
├── wdio.conf.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env
└── .env.example
```
