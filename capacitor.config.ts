import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.bridge.textospeech',
  appName: 'textToSpeech',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
