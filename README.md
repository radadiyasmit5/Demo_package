Publishing the package to github repo

add .npmrc file in the root level(where package.json is located)
@radadiyasmit5:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:\_authToken=TOKEN

# npm init

add these to package.json

"repository": {
"url": "git://github.com/radadiyasmit5/Demo_package.git"
},
"publishConfig": {
"registry": "https://npm.pkg.github.com/"
},

npm publish