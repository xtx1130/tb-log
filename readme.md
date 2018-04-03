# tb-log

## usage
```shell
$ npm install tb-log
```

```js
const log = require('tb-log') // will use the defalut name: tb

log.warn('test')
```
or
```js
const Log = require('tb-log').Log
const log = new Log('name', true)

log.success('test')
```

## API

### class Log
```js
const Log = require('tb-log').Log
const log = new Log('name', true)
```
args[0] &lt;String&gt; The name will show on the tty  
args[1] &lt;Boolean&gt; Async console or not(sync console,use fs.writeSync) 

### log.error(str)/success/info/start/warn/default
```js
log.error('test')
```

### log.clear()
```js
log.clear()
```
clear ttys

## License

MIT