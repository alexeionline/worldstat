module.exports = {
	context: `${__dirname}/src`,

	entry: {
		index: './client',
	},

	output: {
		path:     `${__dirname}/dist`,
		filename:  '[name].js'
	},

	watch: true,

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: {
					test: 'node_modules',
				},
				loader: 'babel-loader',
				query: {
					presets: ['react', 'latest', 'stage-2'],
				},
			},
		],
	}
}