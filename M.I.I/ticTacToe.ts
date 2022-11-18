/**
 * Implementation naive
 */


enum Player {
    X = 'X', 
    O = 'O'
}

type Model = {
    player1: Player,
    player2: Player,
    currentTurn: Player
    board: Board
}

type Tile = Player | undefined

type Board = (Tile)[][]

// row & column => dimensionality = infini, peut avoir des etat invalid +
// demande de savoir que le tictactoe fonctionne avec des cases indexer de 0 a 2
export const play = (model: Model, row: number , column: number): Model => {
    if (row > 2 || column > 2 || row < 0 || column < 0){
        throw new Error('invalid column or row.....')
    }

    model.board[row][column] = model.currentTurn
    const nextTurn = model.currentTurn === Player.O ? Player.X : Player.O
    return {...model, currentTurn: nextTurn };
}


/**
 * 
 * One solution
 * 
 */

 type Model2 = {
    nextPlayer: Player
    currentPlayer: Player
    board: Board
}

type TileIndex = {column: Column, row: Row}

// restrict the input 
type Column = 0|1|2;
type Row =  0|1|2;

export const play2 = (model: Model2, tile: TileIndex): Model2 => {
    model.board[tile.column][tile.row] = model.currentPlayer
    
    return {...model, currentPlayer: model.nextPlayer, nextPlayer: model.currentPlayer  };
}

// autre sln : on peut modeliser le board comme autre chose qu'un tableau aussi. colonne + row sont fixe pas besoin d'avoir un 
// type de cardinality infinie 
//  https://guide.elm-lang.org/appendix/types_as_sets.html