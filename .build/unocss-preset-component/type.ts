import type { AcceptedPlugin, LazyResult, Result, Root } from 'postcss'
import type { CssInJs } from 'postcss-js'
import type { Arrayable, CSSEntries, Preset } from 'unocss'

export type { Arrayable } from 'unocss'

export type Style = { toString(): string } | CssInJs | LazyResult | Result | Root | string

export interface ComponentOption {
  // The layer name of this component
  layer?: string | undefined
  postcssPlugins?: Arrayable<AcceptedPlugin>
  // style string | css in js | Root object
  style: Arrayable<Style>
}

export type ComponentPreset = Omit<Preset, 'name'>

export type CssBody = CSSEntries | string

// parent selector (e.g. [['media', 'hover:hover'], ['supports', 'hover']])
export type ParentSelector = readonly [
  name: string,
  params: string,
]

export type ParsedRule = readonly [
  // candidate shortcut name
  candidates: string[],
  selector: string,
  cssbody: CssBody,
  parents: ParentSelector[],
]
