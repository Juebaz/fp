/* eslint-disable @typescript-eslint/explicit-member-accessibility */

 interface IOptional<T> {
    /**
     * Apply a function to transform the value when the result is a success
     */
    map<C>(f: (t: T) => C): Optional<C>;
  
    andThen<C>(f: (t: T) => Optional<C>): Optional<C>;
    /**
     * Given a failure, return a fallback value.
     */
    withDefault<C>(fallback: C): T | C;
  }
  
  export type Optional<T> = Just<T> | None<T>;
  
  export const just = <T>(value: T): Optional<T> => new Just(value);
  
  export const none = <T>(): Optional<T> => new None();
  
  class Just<T> implements IOptional<T> {
    public readonly tag: 'Just';
    public readonly value: T;
  
    constructor(value: T) {
      this.tag = 'Just';
      this.value = value;
    }
    andThen<C>(f: (t: T) => Optional<C>): Optional<C> {
      return f(this.value);
    }
  
    map<C>(f: (t: T) => C): Optional<C> {
      return just(f(this.value));
    }
  
    withDefault<C>(_fallback: C): T | C {
      return this.value;
    }
  }
  
  class None<T> implements IOptional<T> {
    public readonly tag: 'None';
    public readonly none: undefined;
  
    constructor() {
      this.tag = 'None';
      this.none = undefined;
    }
    andThen<C>(_: (t: T) => Optional<C>): Optional<C> {
      return none();
    }
  
    map<C>(_f: (t: T) => C): Optional<C> {
      return none();
    }
  
    withDefault<C>(fallback: C): C | T{
      return fallback;
    }
  }
  
  export const isSuccess = <T>(result: Optional<T>): result is Just<T> => result.tag === 'Just';
  
  export const isFailure = <T>(result: Optional<T>): result is None<T> => result.tag === 'None';
  
  export const fromNullable = <T>(value: T | undefined): Optional<T> => {
    if (value) {
      return just(value);
    }
  
    return none();
  };
  

