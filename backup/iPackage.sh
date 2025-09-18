echo "npm install..."
npm i

echo "Installing dependencies..."
npm i chance luxon @fontsource/material-icons
# npm i react-select

echo "Installing TypeScript dependencies..."
npm i -D @types/chance @types/luxon

echo "Installing Development dependencies..."
npm i -D postcss autoprefixer tailwindcss
npm install tailwindcss @tailwindcss/vite
npm install tailwindcss @tailwindcss/postcss postcss
npm install tailwindcss @tailwindcss/cli

echo "Copy Files..."
cp C:/workspace/spaceReact/20250911_react/backup/.*.cjs .
cp C:/workspace/spaceReact/20250911_react/backup/index.html .
cp C:/workspace/spaceReact/20250911_react/backup/src/*.css ./src
cp C:/workspace/spaceReact/20250911_react/backup/src/*.mjs .
cp C:/workspace/spaceReact/20250911_react/backup/src/vite.config.ts .
cp -r C:/workspace/spaceReact/20250911_react/backup/src/data ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/copy ./src
mkdir ./src/pages
mkdir ./src/components

echo "Installation Completed!"
read -p "Press Enter to exit!"

# Command for Execution!
# chmod +x iPackage.sh
# bash iPackage.sh