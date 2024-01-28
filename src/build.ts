import * as fs from "fs";
import { getAllSchemeNames, getScheme } from "tinted-theming-colors";
import * as path from "path";

import * as templates from "./templates";
import { appName } from "./constants";

const rootPath = process.cwd();
const themesPath = path.join(rootPath);
const colorSchemesPath = path.join(rootPath, "color-schemes");
const widgetsPath = path.join(rootPath, "widgets");
const skinsFilePath = path.join(rootPath, "base16-sublime-text.skins");
const activationThemesPath = path.join(rootPath, "themes.py");

function cleanFiles(directory: string, extension: string) {
    const files = fs.readdirSync(directory) || [];

    files.forEach(file => {
      if (path.extname(file) === extension) {
        const filePath = path.join(directory, file);

        fs.rmSync(filePath);
      }
    });
}

const cleanDir = (path: string) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true });
  }

  fs.mkdirSync(path);
}

const createUi = async (schemeName: string) => {
  const colorScheme = await getScheme(schemeName);

  fs.writeFileSync(
    path.join(themesPath, `base16-${schemeName}.sublime-theme`),
    JSON.stringify(templates.ui(colorScheme), null, "\t")
  );
}

const createSyntax = async (schemeName: string) => {
  const colorScheme = await getScheme(schemeName);

  fs.writeFileSync(
    path.join(colorSchemesPath, `base16-${schemeName}.sublime-color-scheme`),
    JSON.stringify(templates.syntax(colorScheme), null, "\t")
  );
}

const createWidget = async (schemeName: string) => {
  const colorScheme = await getScheme(schemeName);
  
  fs.writeFileSync(
    path.join(rootPath, `/widgets/${schemeName}.stTheme`),
    templates.widget(colorScheme)
  );
  
  fs.writeFileSync(
    path.join(rootPath, `/widgets/${schemeName}.sublime-theme`),
    templates.widgetSettings(colorScheme)
  );
}

const createSkinsFile = async (schemes: string[]) => {
  const skinsContent = JSON.stringify(schemes.reduce((acc, schemeName) => {
    acc[schemeName] = {
    "Preferences": {
      "color_scheme": `Packages/${appName}/color-schemes/${schemeName}.sublime-color-scheme`,
      "theme": `Packages/${appName}/themes/${schemeName}.sublime-theme`,
      }
    };

    return acc;
  }, {}));

  fs.writeFileSync(skinsFilePath, skinsContent)
}

const createActivationFile = async (schemes: string[]) => {
  const schemesQuotes = schemes.map(scheme => `"base16-${scheme}"`);
  let text = `THEMES = [${schemesQuotes.join(",")}]`;

  fs.writeFileSync(
    activationThemesPath,
    text,
  );
}


const main = () => {
  const schemes = getAllSchemeNames();

  cleanFiles(themesPath, 'sublime-theme');
  cleanDir(colorSchemesPath);
  cleanDir(widgetsPath);

  schemes.map((schemeName: string) => {
    createSyntax(schemeName);
    createUi(schemeName);
    createWidget(schemeName);
  });

  createSkinsFile(schemes);
  createActivationFile(schemes);
}

main();
