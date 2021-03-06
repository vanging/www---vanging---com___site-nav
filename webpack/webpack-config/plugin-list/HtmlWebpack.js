const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const vars = require('../../vars');

const pages = vars.project.pages;

const plugins= [];

pages.forEach(function(page)
{
    const plugin = new HtmlWebpackPlugin
    (
        {
            filename: `${page}index.html`,
            template: path.resolve(vars.path.src.pages, `${page}index.ejs`),
            chunks: [page],
            hash: true,
            cache: true,
        }
    );
    plugins.push(plugin);
});

module.exports = plugins;