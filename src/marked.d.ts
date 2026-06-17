declare module 'marked' {
  export interface MarkedOptions {
    renderer?: unknown;
    [key: string]: unknown;
  }

  export const marked: {
    (src: string, options?: MarkedOptions): string;
    parse(src: string, options?: MarkedOptions): string;
    setOptions(options: MarkedOptions): void;
  }
}
