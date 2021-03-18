# express-handlebars-inline-script

Helper to inline a script with fallback to serving a script via `src`. Zero dependencies. For node 6+.

`npm install express-handlebars-inline-script`

## Usage

Setting up the helper:

```js
const exphbs = require('express-handlebars');
const inlineScript = require('express-handlebars-inline-script');

exphbs.create({
	// register the helper, see:
	// https://github.com/ericf/express-handlebars
	// for how to setup express-handlebars
	helpers: {
		inlineScript: process.env.NODE_ENV === 'production' ?
			// will inline the script by reading the file and generating a script tag
			inlineScript.inline :
			// noinline generates a script tag with the src set to the path passed
			inlineScript.noinline
	}
});
```

Use in the view:

```hbs
<head>
	{{{ inline '/path/to/a/script.js' }}}
</head>
```

## Note

Due to the fact that handlebars render synchronously, files are read synchronously to provide the path return value.

This may be a problem if assets/paths are generated dynamically. I recommend only using this for static assets.

## License

MIT License

Copyright (c) 2016 Joseph Clay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
