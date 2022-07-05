const fs = require('fs');
const path = require('path');
const sass = require('node-sass');


const compile = (srcPath, destinationPath) => {

    console.log(srcPath, destinationPath)
    const result = sass.renderSync({
        data: fs.readFileSync(
            path.resolve(srcPath)
        ).toString(),
        outputStyle: 'compressed',
        includePaths: [path.resolve('src')],
    })
    fs.writeFileSync(path.resolve(destinationPath), result.css);
    console.table(result.stats);
}

const getComponents = () => {
    let sassComponents = [];
    const rootDirectory = 'src';
}

compile('src/global.scss', 'lib/global.css')
compile('src/components/_button.scss', 'lib/button.css');
compile('src/components/_tooltip.scss', 'lib/tooltip.css');