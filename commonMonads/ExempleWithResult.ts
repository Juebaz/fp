import { Result } from "./Result";


 declare function doA(): number;
 declare function doB(a: number): number;
 declare function doC(a: number): number;

 
function sumAbcd1(): number {
    try{
        const a = doA();
        const b = doB(a);
        const c = doC(b)
        return c
    }
    catch(e){
        return 0
    }
}

declare function doA1(): Result<void,number>;
declare function doB1(a: number): Result<void,number>;
declare function doC1(a: number): Result<void, number>;

function sumAbcd2(): number {
    return doA1()
        .andThen(doB1)
        .andThen(doC1)
        .withDefault(0)
}

sumAbcd1()
sumAbcd2()