

class WithTrace {
    public readonly trace: string[];
    public readonly value: string;
  
    constructor(value: string, trace: string[]) {
      this.trace = trace;
      this.value = value;
    }
  
    public andThen(f:(v: string) => string): WithTrace{
        return new WithTrace(f(this.value), this.trace.concat(f(this.value)))
    }
}

const withTrace = (value: string): WithTrace => new WithTrace(value, []);


const doA = (name: string) => {
    return name.toLowerCase()
}


const res = withTrace('ALLO')
    .andThen(doA)
    .andThen(s => s.toUpperCase())


console.log(res, res.value)