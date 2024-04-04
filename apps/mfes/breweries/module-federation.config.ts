import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'breweries',
  exposes: {
    './Routes': 'apps/mfes/breweries/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
