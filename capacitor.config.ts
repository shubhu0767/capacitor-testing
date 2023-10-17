import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-testing',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
