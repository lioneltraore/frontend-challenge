import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'expenses-chart-component',
  webDir: '../../dist/apps/expenses-chart-component',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
