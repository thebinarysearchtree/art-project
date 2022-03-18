# Art Project
This repository can be used to explore the example components or as a template for creating a new project. Follow the instructions below to install and run the project. Make sure that you have git and node.js installed.

```
git clone https://github.com/thebinarysearchtree/art-project.git art-project
cd art-project
npm install
npm start

open chrome at http://localhost:3000
```

To bundle and minify your project, type
```
npm run build
```
into the command line. This will create a file called ```index.js``` in the ```build``` folder that can be used in your ```index.html```.

This script assumes that your entry point is ```src/index.js```. An entry point is the main JavaScript file that runs when your application starts. The build process will also convert any css import assertions into strings, as only chrome-based browsers support import assertions at the moment. For example, 
```
import styles from HelloWorld.css assert { type: 'css' };
```
will be converted to 
```
const styles = `your css`;
```
