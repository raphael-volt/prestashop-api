## Consuming the library during development
Compile the library
```bash
npm run build
```
Create the npm link inside the `dist` directory :
```bash
cd dist
npm link
```
From the root directory of the `ng2` application where you want to link the library, run :
```bash
npm link prestashop-api
```
Remove the npm link to the library :
```bash
npm rm --global prestashop-api 
```
## Tools
Delete all generated `js` files after a build :
```bash
. clean-js.sh 
```