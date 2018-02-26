declare module 'deep-stripper' {
  declare function strip<T>(obj: Dictionary<T>, ...keys: string[]): Dictionary<T>;

  declare function strip<T extends object>(obj: T, ...keys: string[]): PartialObject<T>;

  export default strip;
}
