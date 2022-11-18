/***
 * Naive implementation 
 * Ellipsis need a numberOfLine
 * Expdandable need a maxHeight + labels
 * 
 */

type ComponentProps = {
    overflow: "ellipsis" | "expandable",
    numberOfLines? : number, 
    maxHeight?: number,
    labels?: {showall: string, showLess: string}
}


/**
 * interface cleaner + explicit + no optional field that arent really optional
 * 
 * Dont need to know what the ellipsis need or the expandable
 *  */ 

type ComponentProps2 = {
    overflow: Ellipsis | Expandable 
}


type Ellipsis = {
    numberOfLines: number 
}

type Expandable = {
    maxHeight: number
    labels: {showall: string, showLess: string}
}



