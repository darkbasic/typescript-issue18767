# AngularMeteorCli DEPRECATED

## Errors

The following error only occurs if you first run:
`rm -rf .meteor/local`  

```
W20170923-13:57:24.324(2)? (STDERR)           
W20170923-13:57:24.354(2)? (STDERR) /home/niko/.meteor/packages/meteor-tool/.1.5.2.ecibw9++os.linux.x86_64+web.browser+web.cordova/mt-os.linux.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:313
W20170923-13:57:24.355(2)? (STDERR)                                             throw(ex);
W20170923-13:57:24.356(2)? (STDERR)                                             ^
W20170923-13:57:24.356(2)? (STDERR) MongoError: not master and slaveOk=false
W20170923-13:57:24.357(2)? (STDERR)     at Object.Future.wait (/home/niko/.meteor/packages/meteor-tool/.1.5.2.ecibw9++os.linux.x86_64+web.browser+web.cordova/mt-os.linux.x86_64/dev_bundle/server-lib/node_modules/fibers/future.js:449:15)
W20170923-13:57:24.357(2)? (STDERR)     at [object Object]._.extend.count (packages/mongo/mongo_driver.js:1090:51)
W20170923-13:57:24.358(2)? (STDERR)     at [object Object].Cursor.(anonymous function) [as count] (packages/mongo/mongo_driver.js:875:44)
W20170923-13:57:24.359(2)? (STDERR)     at server/main.ts:5:22
W20170923-13:57:24.359(2)? (STDERR)     at Function.time (/home/niko/WebstormProjects/angular-meteorcli-deprecated/.meteor/local/build/programs/server/profile.js:309:28)
W20170923-13:57:24.359(2)? (STDERR)     at /home/niko/WebstormProjects/angular-meteorcli-deprecated/.meteor/local/build/programs/server/boot.js:347:13
W20170923-13:57:24.360(2)? (STDERR)     at /home/niko/WebstormProjects/angular-meteorcli-deprecated/.meteor/local/build/programs/server/boot.js:388:5
W20170923-13:57:24.361(2)? (STDERR)     at Function.run (/home/niko/WebstormProjects/angular-meteorcli-deprecated/.meteor/local/build/programs/server/profile.js:510:12)
W20170923-13:57:24.362(2)? (STDERR)     at /home/niko/WebstormProjects/angular-meteorcli-deprecated/.meteor/local/build/programs/server/boot.js:386:11
W20170923-13:57:24.362(2)? (STDERR)     - - - - -
W20170923-13:57:24.363(2)? (STDERR)     at Function.MongoError.create (/home/niko/.meteor/packages/npm-mongo/.2.2.30.1iqn22b++os+web.browser+web.cordova/npm/node_modules/mongodb-core/lib/error.js:31:11)
W20170923-13:57:24.363(2)? (STDERR)     at /home/niko/.meteor/packages/npm-mongo/.2.2.30.1iqn22b++os+web.browser+web.cordova/npm/node_modules/mongodb-core/lib/connection/pool.js:497:72
W20170923-13:57:24.364(2)? (STDERR)     at authenticateStragglers (/home/niko/.meteor/packages/npm-mongo/.2.2.30.1iqn22b++os+web.browser+web.cordova/npm/node_modules/mongodb-core/lib/connection/pool.js:443:16)
W20170923-13:57:24.364(2)? (STDERR)     at [object Object].messageHandler (/home/niko/.meteor/packages/npm-mongo/.2.2.30.1iqn22b++os+web.browser+web.cordova/npm/node_modules/mongodb-core/lib/connection/pool.js:477:5)
W20170923-13:57:24.365(2)? (STDERR)     at Socket.<anonymous> (/home/niko/.meteor/packages/npm-mongo/.2.2.30.1iqn22b++os+web.browser+web.cordova/npm/node_modules/mongodb-core/lib/connection/connection.js:331:22)
W20170923-13:57:24.365(2)? (STDERR)     at emitOne (events.js:77:13)
W20170923-13:57:24.366(2)? (STDERR)     at Socket.emit (events.js:169:7)
W20170923-13:57:24.366(2)? (STDERR)     at readableAddChunk (_stream_readable.js:153:18)
W20170923-13:57:24.367(2)? (STDERR)     at Socket.Readable.push (_stream_readable.js:111:10)
W20170923-13:57:24.367(2)? (STDERR)     at TCP.onread (net.js:540:20)
```
