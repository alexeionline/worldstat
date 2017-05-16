module.exports = {
	context: `${__dirname}/src`,

	entry: {
		index: './main',
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