const fs = require('fs');
const path = require('path');
const cache = Object.create(null);

const attempt = fn => {
	try {
		return fn();
	} catch(err) {
		return err;
	}
};

const isError = obj => Object.prototype.toString.call(obj) === '[object Error]';

const makeNonAbs = p => {
	return p[0] === path.sep || p[0] === '/' ? p.substr(1, p.length) : p;
};

const inline = function(p) {
	const ext = path.extname(p);
	const filePath = path.resolve(path.normalize(makeNonAbs(p)));

	if (!ext) {
		console.error('inliner: cannot inline a directory', p);
		return false;
	}

	const file = attempt(() => fs.readFileSync(filePath));
	if (isError(file) || !file) {
		console.error('inliner: missing file at', p, filePath);
		return false;
	}

	return `<script>${file}</script>`;
};

module.exports = {
	noinline: p => `<script src="${p}"></script>`,
	inline: p => {
		if (cache[p]) return cache[p];
		const result = cache[p] = inline(p);
		// fallback to noinline if things go wrong
		return result === false ? this.noinline(p) : result;
	}
};