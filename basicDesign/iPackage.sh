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
# npm i redux @reduxjs/toolkit react-redux
# npm i redux-logger
# npm i -D @types/redux-logger
# npm i redux-thunk
# npm i -D @types/redux-thunk
# about jotai
npm i jotai
npm i react-dnd@latest react-dnd-html5-backend@latest
npm i @dnd-kit/core @dnd-kit/sortable
npm i react-router-dom
echo "Copy Files..."
cp C:/workspace/spaceReact/20250911_react/basicDesign/.*.cjs .
cp C:/workspace/spaceReact/20250911_react/basicDesign/index.html .
cp C:/workspace/spaceReact/20250911_react/basicDesign/postcss.config.mjs .
cp C:/workspace/spaceReact/20250911_react/basicDesign/vite.config.ts .
cp C:/workspace/spaceReact/20250911_react/basicDesign/src/*.css ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/data ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/copy ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/components ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/hooks ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/theme ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/contexts ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/store ./src
cp -r C:/workspace/spaceReact/20250911_react/basicDesign/src/utils ./src
mkdir -p ./src/pages
mkdir -p ./src/routes
echo "Installation Completed!"
read -p "Press Enter to exit!"
# Command for Execution!
# chmod +x iPackage.sh
# bash iPackage.sh