/***
 * Naive implementation 
 * Ellipsis need a numberOfLine
 * Expdandable need a maxHeight + labels
 * 
 */

type TextAreaProps2 = {
    overflow?: "ellipsis" | "expandable",
    numberOfLines? : number, 
    maxHeight?: number,
}



/**
 * interface cleaner + explicit + no optional field that arent really optional
 * Limiter le nombre de question / le nombre de branche a gerer. / demande plus de tests 
  Dont need to know what the ellipsis need or the expandable
 *  */ 

type TextAreaProps = {
    overflow: Ellipsis | Expandable | FullText
}

type Ellipsis = {
    type : 'ellipsis',
    numberOfLines: number 
}

type Expandable = {
    type : 'expandable',
    maxHeight: number
}

type FullText = {
    type : 'fullText',
}

const Ellipsis = (numberOfLines: number): Ellipsis => ({
    type: 'ellipsis',
    numberOfLines
})

const Expandable = (maxHeight: number): Expandable => ({
    type : 'expandable',
    maxHeight
})

/// ------------------------------------ //

// client
const props1 : TextAreaProps = {
    overflow: Ellipsis(8)
}

const props2: TextAreaProps = {
    overflow: Expandable(500)
}

