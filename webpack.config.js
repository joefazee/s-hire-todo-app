const path = require('path');


module.exports = (env) => {

    const isProduction = env === 'production';

    return {
        entry: './frontend/src/app.js',
        output: {
            path: path.join(__dirname, 'public/js'),
            filename: 'bundle.js'
        },
    
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
            ]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'
    
    }
}