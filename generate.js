const fs = require("fs");
const path = require("path");

let COLOR_CLASS = {
    'fill="#6563ff"': 'class="uim-primary"',
    'fill="#8382ff"': 'class="uim-secondary"',
    'fill="#a2a1ff"': 'class="uim-tertiary"',
    'fill="#c1c0ff"': 'class="uim-quaternary"',
    'fill="#ffffff"': 'class="uim-quinary"',
    'fill="#fff"': 'class="uim-quinary"',
  }
  

const OUTPUT_FOLDER = "output";
const INPUT_FOLDER = "unicons";

function replaceColors(fileContents)
{
    for(let search in COLOR_CLASS)
    {
        while(fileContents.indexOf(search) >= 0)
        {
            fileContents = fileContents.replace(search, COLOR_CLASS[search]);
        }
    }
    return fileContents;
}
async function processLineIcons()
{
    const lineIconsPath = path.join(INPUT_FOLDER, "line");

    let files = fs.readdirSync(lineIconsPath);
    
    for(let file of files)
    {
        console.log(`Converting file: line/${file}`);
        let filePath = path.join(lineIconsPath, file);
        let fileContents = fs.readFileSync(filePath).toString("utf-8");
        fileContents = replaceColors(fileContents);
        fs.writeFileSync(path.join(OUTPUT_FOLDER, "line", file), fileContents);
    }
}


async function processSolidIcons()
{
    const solidIconsPath = path.join(INPUT_FOLDER, "solid");

    let files = fs.readdirSync(solidIconsPath);
    
    for(let file of files)
    {
        console.log(`Converting file: solid/${file}`);
        let filePath = path.join(solidIconsPath, file);
        let fileContents = fs.readFileSync(filePath).toString("utf-8");
        fileContents = replaceColors(fileContents);
        
        fs.writeFileSync(path.join(OUTPUT_FOLDER, "solid", file), fileContents);
    }
}

async function processThinIcons()
{
    const thinIconsPath = path.join(INPUT_FOLDER, "thin");

    let files = fs.readdirSync(thinIconsPath);
    
    for(let file of files)
    {
        console.log(`Converting file: thin/${file}`);
        let filePath = path.join(thinIconsPath, file);
        let fileContents = fs.readFileSync(filePath).toString("utf-8");
        fileContents = replaceColors(fileContents);
        
        fs.writeFileSync(path.join(OUTPUT_FOLDER, "thin", file), fileContents);
    }
}


async function processMonochromeIcons()
{
    const monochromeIconsPath = path.join(INPUT_FOLDER, "monochrome");

    let files = fs.readdirSync(monochromeIconsPath);
    
    for(let file of files)
    {
        console.log(`Converting file: monochrome/${file}`);
        let filePath = path.join(monochromeIconsPath, file);
        let fileContents = fs.readFileSync(filePath).toString("utf-8");
        fileContents = replaceColors(fileContents);
        
        fs.writeFileSync(path.join(OUTPUT_FOLDER, "monochrome", file), fileContents);
    }
}

processLineIcons();
processSolidIcons();
processThinIcons();
processMonochromeIcons();
