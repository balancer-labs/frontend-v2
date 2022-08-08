const parsePath = require('parse-filepath');
const requireContext = require('require-context');
const fs = require('fs');
const path = require('path');

const writeFilePath = path.resolve(
  __dirname,
  `../../types/global-components.d.ts`
);

function generateGlobalComponentTypes(): void {
  // Get all the .vue files in the global components directory
  const filePaths = requireContext(
    path.resolve(__dirname, '../../components/_global'),
    true,
    /^((?!(stories|spec)).)*\.vue$/i
  );

  const importStatements: string[] = [
    "import Jazzicon from 'vue3-jazzicon/src/components';",
  ];
  const globalComponentTypeDefinitions: string[] = [
    'Jazzicon: typeof Jazzicon;',
  ];
  for (const filePath of filePaths.keys()) {
    const pathObj = parsePath(filePath);
    const name = pathObj.name;
    const path = `@/components/_global/${pathObj.path}`;

    importStatements.push(`import ${name} from '${path}';`);

    globalComponentTypeDefinitions.push(`${name}: typeof ${name};`);
  }

  const fileContent = `/* eslint-disable */
/* This file is auto-generated by global-component-types.generator.ts */
${importStatements.join('\n')}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
${globalComponentTypeDefinitions.map(s => `    ${s}`).join('\n')}
  }
}
`;

  fs.writeFileSync(writeFilePath, fileContent);
}
try {
  console.log('🔧 Generating global component types...');
  generateGlobalComponentTypes();
  console.log(`✅ Generated global component types at ${writeFilePath}`);
} catch (error) {
  console.error('Failed to generate global component types:', error);
}
