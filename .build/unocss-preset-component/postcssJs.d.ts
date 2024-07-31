declare module 'postcss/lib/processor' {
  import type { LazyResult, ProcessOptions } from 'postcss'
  import type NoWorkResult from 'postcss/lib/no-work-result'
  import type { CssInJs, parse } from 'postcss-js'

  class Processor {
    process(
      obj: CssInJs,
      opts: { parser: typeof parse } & Omit<ProcessOptions, 'parser'>,
    ): LazyResult | NoWorkResult
  }
}
