### [mkdirSync](https://github.com/warren-bank/node-mkdirSync)

Polyfill library for [`fs.mkdirSync()`](https://nodejs.org/api/fs.html#fsmkdirsyncpath-options) to support the `recursive` option in versions of Node.js older than _v10.12.0_

#### Usage:

#### add library to project as a dependency:

```bash
  npm install --save "@warren-bank/mkdir-sync"
```

#### use library in project:

```bash
  const mkdirSync = require('@warren-bank/mkdir-sync')

  const path = require('path')
  const dirpath = path.join(__dirname, 'a', 'b', 'c')

  try {
    mkdirSync(dirpath, {recursive: true})
  }
  catch(error) {
    console.log(error)
  }
```

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPL-2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)

- - - -

#### Similar `npm` Libraries:

* `mkdir-recursive`
  - [npm repo](https://www.npmjs.com/package/mkdir-recursive)
  - [github repo](https://github.com/hex7c0/mkdir-recursive)
    * [code](https://github.com/hex7c0/mkdir-recursive/blob/0.4.0/index.js) is well written
