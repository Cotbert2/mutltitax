import type { CapacitorConfig } from '@capacitor/cli';
import { SplashScreen } from '@capacitor/splash-screen';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'multitax',
  webDir: 'www'
};

SplashScreen: {
  launchShowDuration: 3000;
  showSpinner: false;
}

export default config;
