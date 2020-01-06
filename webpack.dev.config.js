module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js' 
    },
    devServer: {
        contentBase: './dist'
    }
}