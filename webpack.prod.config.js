module.exports = {
    mode: 'production',
    entry: './src/main.jsx',
    output: {
        filename: 'bundle.js' 
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react', '@babel/preset-env']
                }
            }
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            templateParameters: {
                title: 'Webpack Base Project'
            }
        })
    ]
}