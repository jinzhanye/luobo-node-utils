# luobo-node-utils

## Installation

```sh
$ npm install --save luobo-node-utils
```

## Usage

```js
const path = require("path");
const { batchReadFile } = require('luobo-node-utils');

batchReadFile(path.resolve(__dirname, 'filepath')).then((files) => {
  console.log(files) /* files content */
});
```

## License
MIT © [jinzhanye]()
