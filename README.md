[npm-version-image]: https://img.shields.io/npm/v/log-md.svg?color=0971fe
[npm-version-url]: https://www.npmjs.com/package/log-md
[npm-downloads-image]: https://img.shields.io/npm/dm/log-md.svg?color=2ecc40
[npm-downloads-url]: https://www.npmjs.com/package/log-md
[action-image]: https://github.com/cezaraugusto/log-md/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/log-md/actions

> Output Markdown using console.log for CLI

# log-md [![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![workflow][action-image]][action-url]

<p align="center">
<img src="./result.png" width="600">
</p>

## Installation

```bash
npm install log-md
```

## Usage

`log-md` parses the Markdown string and prints it to the terminal as styled, colorized text using `console.log` (headings, bold, italic, strikethrough, inline code, lists, and fenced code blocks), producing the output shown in the image above.

```js
import {log} from 'log-md'

log(`
  # log-md

  This is a ~~test~~ file including some key features of
  [log-md](https://github.com/cezaraugusto/log-md):

  * Supports lists
  * Inline code like \`path.join()\`
  * Bold like **BOLD** and __italic__ too.

  Also supports multi-line code blocks:

  \`\`\`
    const path = require('path')
    path.join('bla', 'bla')
  \`\`\`

  ## Install

  See \`README.md\`

  Like it? Give it a ⭐️ (yes emojis work!)
`)
```

## API

### log(message, gutter?)

#### message

Type: `string`

The markdown message you want to parse.

#### gutter

Type: `boolean`\
Default: `false`

Adds a line-break on top and bottom of your messages.

## Related projects

* [pintor](https://github.com/cezaraugusto/pintor)
* [mklicense](https://github.com/cezaraugusto/mklicense)
* [prefers-yarn](https://github.com/cezaraugusto/prefers-yarn)
* [go-git-it](https://github.com/cezaraugusto/go-git-it)
* [git-precision](https://github.com/cezaraugusto/git-precision)
* [isolated-deps](https://github.com/cezaraugusto/isolated-deps)

## License

MIT (c) Cezar Augusto.
