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
        includePaths: [path.resolve('styles')],
    })
    fs.writeFileSync(path.resolve(destinationPath), result.css);
}

// const getComponents = () => {
//     let sassComponents = [];
//     const rootDirectory = 'src';
// }

compile('styles/global.scss', 'lib/global.css')
compile('styles/components/_button.scss', 'lib/button.css');
compile('styles/components/_tooltip.scss', 'lib/tooltip.css');
compile('styles/components/_page_loader.scss', 'lib/page_loader.css');
compile('styles/components/_pagination.scss', 'lib/pagination.css');
compile('styles/components/_table.scss', 'lib/table.css');