declare module 'appium' {
  import { AppiumServer } from '@appium/types';

  export type AppiumArgs = {
    throwInsteadOfExit?: boolean;
    loglevel?:
      | 'info'
      | 'info:debug'
      | 'info:info'
      | 'info:warn'
      | 'info:error'
      | 'warn'
      | 'warn:debug'
      | 'warn:info'
      | 'warn:warn'
      | 'warn:error'
      | 'error'
      | 'error:debug'
      | 'error:info'
      | 'error:warn'
      | 'error:error'
      | 'debug'
      | 'debug:debug'
      | 'debug:info'
      | 'debug:warn'
      | 'debug:error';
  };

  export function main(argv: AppiumArgs): AppiumServer;
}
