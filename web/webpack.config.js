const path = require('path')

module.exports = {
    mode: 'development',
    entry: './ts/index.ts',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        modules: [
        'node_modules',
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
}