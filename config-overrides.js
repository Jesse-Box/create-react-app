const SentryWebpackPlugin = require('@sentry/webpack-plugin');
// config-overrides.js
module.exports = function override(config, env) {
	// New config, e.g. config.plugins.push...
	config.devtool = 'source-map';
	config.plugins.push(
		new SentryWebpackPlugin({
			// sentry-cli configuration - can also be done directly through sentry-cli
			// see https://docs.sentry.io/product/cli/configuration/ for details
			org: 'jesse-box',
			project: 'javascript-react',
			include: './build',
			authToken: process.env.SENTRY_AUTH_TOKEN,
		})
	);
	return config;
};
