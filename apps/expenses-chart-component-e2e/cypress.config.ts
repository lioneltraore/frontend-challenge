import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run expenses-chart-component:serve:development',
        production: 'nx run expenses-chart-component:serve:production',
      },
      ciWebServerCommand: 'nx run expenses-chart-component:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
