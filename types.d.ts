declare module 'log-md' {
  /**
   * Output Markdown using console.log for CLI
   * @param message The markdown message you want to parse.
   * @param gutter Adds a line-break on top and botton of your messages.
   */
  export function log(message: string, gutter?: boolean): void;
}
