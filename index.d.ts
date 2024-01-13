/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class HandlerGroup {
  defineHandler(name: string, callback: (...args: any[]) => any): void
}
export class Model {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
export class Field {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
export class Property {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
export class Relation {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
export class Namespace {
  isMain(): boolean
  isStd(): boolean
  path(): Array<string>
  namespace(name: string): Namespace | null
  namespaceOrCreate(name: string): Namespace
  namespaceAtPath(path: Array<string>): Namespace | null
  namespaceOrCreateAtPath(path: Array<string>): Namespace
  defineModelDecorator(name: string, body: (model: Model) => void): void
  defineModelFieldDecorator(name: string, body: (field: Field) => void): void
  defineModelRelationDecorator(name: string, body: (relation: Relation) => void): void
  defineModelPropertyDecorator(name: string, body: (property: Property) => void): void
  defineEnumDecorator(name: string, body: (e: Enum) => void): void
  defineEnumMemberDecorator(name: string, body: (member: EnumMember) => void): void
  definePipelineItem(name: string, body: (input: any, args: {[key: string]: any}, object: any, teo: any) => any | Promise<any>): void
  defineTransformPipelineItem(name: string, callback: (input: any, args: {[key: string]: any}, object: any, teo: any) => any | Promise<any>): void
  defineValidatorPipelineItem(name: string, callback: (input: any, args: {[key: string]: any}, object: any, teo: any) => boolean | string | undefined | null | Promise<boolean | string | undefined | null>): void
  /** Register a named callback. */
  defineCallbackPipelineItem(name: string, callback: (input: any, args: {[key: string]: any}, object: any, teo: any) => void | Promise<void>): void
  defineComparePipelineItem<T>(name: string, callback: (oldValue: T, newValue: T, args: {[key: string]: any}, object: any, teo: any) => boolean | string | undefined | null | Promise<boolean | string | undefined | null>): void
  defineHandler(name: string, callback: (...args: any[]) => any): void
  defineHandlerGroup(name: string, callback: (...args: any[]) => any): void
  defineModelHandlerGroup(name: string, callback: (...args: any[]) => any): void
  defineMiddleware(name: string, callback: (args: {[key: string]: any}) => (ctx: RequestCtx, next: (ctx: RequestCtx) => Promise<Response>) => Promise<Response> | Response): void
}
export class DateOnly {
  toString(): string
  static fromString(string: string): unknown
}
export class ObjectId {
  toString(): string
  static fromString(string: string): unknown
}
/**
 * File
 * File only represent input file in form request.
 */
export class File {
  filepath: string
  contentType?: string
  filename: string
  filenameExt?: string
}
export class Range {
  upperbond(): number
  lowerbond(): number
  isClosed(): boolean
  isOpen(): boolean
}
export class EnumVariant {
  toString(): string
  static fromString(value: string): EnumVariant
}
export class OptionVariant { }
export class Pipeline { }
export class InterfaceEnumVariant { }
export class App {
  /** Create a Teo app. */
  constructor()
  /** @internal */
  static withCli(cli: boolean): App
  /** @internal */
  _prepare(): Promise<void>
  /** @internal */
  _run(): Promise<void>
  /** Run this app. */
  run(): Promise<void>
  mainNamespace(): Namespace
  /** Run before server is started. */
  setup(callback: (ctx: any) => void | Promise<void>): void
  /** Define a custom program. */
  program(name: string, callback: (ctx: any) => void | Promise<void>): void
}
export class ReadOnlyHeaderMap {
  keys(): Array<string>
  len(): number
  containsKey(key: string): boolean
  get(key: string): string | null
}
export class RequestCtx {
  request(): Request
  body(): unknown
  teo(): unknown
  handlerMatch(): HandlerMatch
}
export class HandlerMatch {
  path(): Array<string>
  handlerName(): string
  captures(): object
}
export class Request {
  method(): string
  path(): string
  queryString(): string
  contentType(): string
  headers(): ReadOnlyHeaderMap
}
export class ReadWriteHeaderMap {
  keys(): Array<string>
  len(): number
  containsKey(key: string): boolean
  get(key: string): string | null
  set(key: string, value: string): void
}
export class Response {
  static empty(): Response
  static string(content: string, contentType: string): Response
  static teon(value: unknown): this
  static html(content: string): Response
  static data(value: unknown): this
  static dataMeta(data: unknown, meta: unknown): this
  static file(path: string): Response
  static redirect(path: string): Response
  setCode(code: number): void
  code(): number
  headers(): ReadWriteHeaderMap
  isFile(): boolean
  isText(): boolean
  isEmpty(): boolean
  isTeon(): boolean
  getText(): string | null
  getTeon(): unknown
  getFile(): string | null
}
export class EnumMember {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
export class Enum {
  setData(key: string, value: unknown): void
  data(key: string): unknown
}
