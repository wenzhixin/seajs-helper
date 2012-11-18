# seajs helper
my seajs app use spm

## Directory structure
```
 ── assets # common modules, the third-party libaries and release modules
│   ├── backbone
│   │   └── 0.9.2
│   │       └── backbone.js
│   ├── ...
│   ├── seajs
│   │   └── 1.3.0
│   │       ├── sea.js
│   │       └── sea-debug.js
|   |       └── ...
│   ├── seajs-helper
│   |   └── 1.0.0
│   │       └── sea-helper.js
│   ├── css
│   ├── └── base.css
│   └── release
│       └── 1.0.0
│           └── init.js
├── css
├── images
├── index.html
├── js  # a lot of app's custom modules
|    ├── init.js  # init app
|    ├── models
|    ├── templates
|    ├── views
|    │   └── app.js
|    └── ...
├── package.json
```

## index.html
```
<script type="text/javascript" src="assets/seajs/1.3.0/sea.js"></script>
<script type="text/javascript" src="assets/seajs-helper/1.0.0/seajs-helper.js"></script>
```

## How to build
```
spm build --src=js
```

## How to use (sea-helper.js)
* debug:
```
http://ip:port/?debug=true
```
* release:
```
http://ip:port/
```

## author: 
* email: wenzhixin2010@gmail.com  
* weibo: <a href="http://weibo.com/2292826740">@_文翼_</a> 