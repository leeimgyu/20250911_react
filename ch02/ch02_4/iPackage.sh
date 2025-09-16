@echo off
echo "npm install..."
npm i

echo "Installing dependencies..."
npm i chance luxon

echo "Installing TypeScript dependencies..."
npm i -D @types/chance @types/luxon

echo "Copy Files..."
cp C:/workspace/spaceReact/20250911_react/backup/.*.cjs .
cp C:/workspace/spaceReact/20250911_react/backup/index.html .
cp C:/workspace/spaceReact/20250911_react/backup/src/data ./src
cp C:/workspace/spaceReact/20250911_react/backup/iPackage.sh .

echo "Installation Completed!"
read -p "Press Enter to exit!"

# Command for Execution!
# chmod +x iPackage.sh
# bash iPackage.sh
