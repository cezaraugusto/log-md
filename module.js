
const chalk = require('chalk')
const marked = require('marked')
const TerminalRenderer = require('marked-terminal')
const dedent = require('dedent')

const defaultOptions = {
  code: chalk.magenta,
  blockquote: chalk.gray.italic,
  html: chalk.gray,
  heading: chalk.green.bold,
  firstHeading: chalk.magenta.underline.bold,
  strong: chalk.bold,
  em: chalk.italic,
  codespan: chalk.blueBright,
  del: chalk.dim.strikethrough,
  link: chalk.cyan,
  href: chalk.cyan.underline,
  tab: 2
}

marked.setOptions({
  renderer: new TerminalRenderer(defaultOptions)
})

module.exports = {
  log: function (message, gutter) {
    // Replace line breaks with \n and remove top-level quotes
    // added by JSON.stringify so marked can interpret it as
    // markdown and can pretty print to console
    const unquotedMessage = JSON
      .stringify(message)
      .replace(/"(.*)"/, '$1')

    // Add marked to parse Markdown
    const multiColorMessage = marked(unquotedMessage)

    // Finally replace \n with real line-breaks
    const prettyPrintMessage = multiColorMessage
      .replace(/\\n/g, '\n')

    const dedentLines = dedent(prettyPrintMessage)

    if (gutter) {
      return console.log(`\n${dedentLines}\n`)
    }
    console.log(dedentLines)
  }
}
