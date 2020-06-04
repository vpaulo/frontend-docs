const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const MARKER = '<!-- Auto Generated Below -->';

const docFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);
    files.forEach((f) => {
        const file = dir + f;

        if (fs.statSync(file).isDirectory()) {
            docFiles(`${file}/`, fileList)
        } else if (file.endsWith('.js')) {
            fileList.push({ path: dir, name: f});
        }
    });
    return fileList;
};

const createMDFiles = async (file, data) => {
    const fileName = `${file.path + file.name}.md`;
    let manualData = '';

    if (fs.existsSync(fileName)) {
        manualData = await getMDManualData(fileName);
        manualData = manualData.trim() === '' ? MARKER : manualData;
    }

    data = `${manualData || MARKER}\n\n${data}`;

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(`Failed to write documentation of ${file.name} : ${err}`);
        }
        console.log(`Successfully written documentation of ${file.name}`);
    });
};

const getMDManualData = (file) => {
    const stream = fs.createReadStream(file);

    return new Promise((resolve, reject) => {
        let data = '';

        stream.on('data', chunk => data += chunk);
        stream.on('end', () => {
            let lines = data.split('\n');
            const idx = lines.findIndex(line => line.includes(MARKER));
            const manualData = lines.filter((_, index) => index <= idx).join('\n');
            return resolve(manualData);
        });
        stream.on('error', error => reject(error));
    });
};

docFiles('src/').forEach(async file => {
    const md = await jsdoc2md.render({ files: file.path + file.name });

    if (md.trim() !== '') {
        createMDFiles(file, md);
    }
});