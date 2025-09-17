echo "npm install..."
npm i

echo "Installing dependencies..."
npm i chance luxon @fontsource/material-icons
# npm i react-select

echo "Installing TypeScript dependencies..."
npm i -D @types/chance @types/luxon

echo "Copy Files..."
cp C:/workspace/spaceReact/20250911_react/backup/.*.cjs .
cp C:/workspace/spaceReact/20250911_react/backup/index.html .
cp C:/workspace/spaceReact/20250911_react/backup/src/*.css ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/data ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/copy ./src
mkdir ./src/pages

echo "Installation Completed!"
read -p "Press Enter to exit!"

# Command for Execution!
# chmod +x iPackage.sh
# bash iPackage.sh