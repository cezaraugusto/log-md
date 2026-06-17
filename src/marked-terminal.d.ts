declare module 'marked-terminal' {
  type StyleFunction = (text: string) => string

  export interface TerminalRendererOptions {
    code?: StyleFunction;
    blockquote?: StyleFunction;
    html?: StyleFunction;
    heading?: StyleFunction;
    firstHeading?: StyleFunction;
    hr?: StyleFunction;
    listitem?: StyleFunction;
    table?: StyleFunction;
    paragraph?: StyleFunction;
    strong?: StyleFunction;
    em?: StyleFunction;
    codespan?: StyleFunction;
    del?: StyleFunction;
    link?: StyleFunction;
    href?: StyleFunction;
    [key: string]: unknown;
  }

  export default class TerminalRenderer {
    constructor (options?: TerminalRendererOptions, highlightOptions?: unknown)
  }
}
