# seajs helper

## Directory structure
```
 ── assets # common modules and the third-party libaries
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
└── js  # a lot of app's custom modules
|    ├── init.js  # init app
|    ├── models
|    ├── templates
|    ├── views
|    │   └── app.js
|    └── ...
├── package.json
```

## How to build
```
spm build --src=js
```

## How to use
* debug:
```
http://ip:port/?debug=true
```
* release:
```
http://ip:port/
```