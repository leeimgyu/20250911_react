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
npm i -D daisyui@latest
npm i redux @reduxjs/toolkit react-redux
npm i redux-logger
npm i -D @types/redux-logger
npm i redux-thunk
npm i -D @types/redux-thunk
npm i react-dnd react-dnd-html5-backend
npm i -D @types/react-dnd
npm install @dnd-kit/core @dnd-kit/sortable
npm i react-router-dom

echo "Copy Files..."
cp C:/workspace/spaceReact/20250911_react/backup/.*.cjs .
cp C:/workspace/spaceReact/20250911_react/backup/index.html .
cp C:/workspace/spaceReact/20250911_react/backup/postcss.config.mjs .
cp C:/workspace/spaceReact/20250911_react/backup/vite.config.ts .
cp C:/workspace/spaceReact/20250911_react/backup/src/*.css ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/data ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/copy ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/components ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/hooks ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/theme ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/contexts ./src
cp -r C:/workspace/spaceReact/20250911_react/backup/src/store ./src
mkdir -p ./src/pages
mkdir -p ./src/routes

echo "Installation Completed!"
read -p "Press Enter to exit!"

# Command for Execution!
# chmod +x iPackage.sh
# bash iPackage.sh