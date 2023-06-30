const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.json'), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: 'portalClient1',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'var', name: 'portalClient1' },

      // For remotes (please adjust)
      name: 'portalClient1',
      filename: 'remoteEntry.js',
      exposes: {
        './web-components': '/src/bootstrap.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        '@angular/core': { requiredVersion: 'auto' },
        '@angular/common': { requiredVersion: 'auto' },
        '@angular/common/http': { requiredVersion: 'auto' },
        '@angular/router': { requiredVersion: 'auto' },
        rxjs: { requiredVersion: 'auto' },
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
