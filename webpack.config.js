// const appRoot = path.resolve(__dirname, 'app');
// const sprottyCssPath = 'node_modules/sprotty/css';
const path = require('path');
const appRoot = path.resolve(__dirname, 'src');

module.exports = {
    entry:  "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: appRoot
    },
    mode: 'development',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.css$/,
                loader: "style-loader!css-loader" 
            }
        ]
    }
}