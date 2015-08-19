# minic
Minimal JSONIC, except:  <!-- [![build status](https://secure.travis-ci.org/yieme/minic.png)](http://travis-ci.org/yieme/minic) -->
- Colons are removed from single character attributes
- Leading and trailing `{}` are removed

## Installation
This module is installed via npm:

```sh
npm i minic --save
```

## Examples

```js
var minic = require('minic')
var data  = {a:'day', i: 'live', as:'myself'};
var small = minic.stringify(data) // aday,ilive,as:myself
data = minic.parse(small); // {"a":"day","i":"live","as":"myself"}
```

## Rights
Copyright (C) 2015 by yieme, License: MIT
