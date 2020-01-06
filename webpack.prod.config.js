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
}