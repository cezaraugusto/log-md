declare module 'marked-terminal' {
  import type {MarkedExtension} from 'marked'

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

  export function markedTerminal(
    options?: TerminalRendererOptions,
    highlightOptions?: unknown
  ): MarkedExtension

  const _default: typeof markedTerminal
  export default _default
}
