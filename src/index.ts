import dedent from 'dedent'
import {marked} from 'marked'
import {markedTerminal} from 'marked-terminal'
import pintor from 'pintor'

// Theme the terminal renderer with pintor instead of
// marked-terminal's built-in chalk defaults.
marked.use(
  markedTerminal({
    firstHeading: (text: string) => pintor.bold.magenta(text),
    heading: (text: string) => pintor.bold.green(text),
    strong: (text: string) => pintor.bold(text),
    em: (text: string) => pintor.italic(text),
    del: (text: string) => pintor.strikethrough(text),
    codespan: (text: string) => pintor.yellow(text),
    blockquote: (text: string) => pintor.gray(text),
    link: (text: string) => pintor.blue(text),
    href: (text: string) => pintor.underline.blue(text)
  })
)

/**
 * Output Markdown using console.log for CLI.
 */
export default function log (message: unknown, gutter?: boolean): void {
  // Replace line breaks with \n and remove top-level quotes
  // added by JSON.stringify so marked can interpret it as
  // markdown and can pretty print to console
  const unquotedMessage = JSON.stringify(message).replace(/"(.*)"/, '$1')

  const multiColorMessage = marked.parse(unquotedMessage) as string

  const prettyPrintMessage = multiColorMessage.replace(/\\n/g, '\n')

  const dedentLines = dedent(prettyPrintMessage)

  if (gutter) {
    console.log(`\n${dedentLines}\n`)

    return
  }

  console.log(dedentLines)
}
