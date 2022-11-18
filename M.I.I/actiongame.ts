/**
 * 
 *  2 choice 
 *  GuildA : A1 | A2 | A3 | A4
 *  Guildb : B1 | B2 | B3 | B4
 *  
 *  turn : choix 1 puis choix 2 different de 1
 * 
 */

type ActionA = "a1" | "a2"| "a3"
type ActionB = "b1" | "b2"| "b3"

type Action = ActionA |ActionB
type Guild = "guildA" | "guildB"

/**
 * invalide = {1: "a1", 2: "b1"}
 * 
 */

type Turn = {1: Action, 2:Action}


/**
 * on encode le fait qu'un action doit etre fait dans la meme categorie.
 * mais vaut pas la peine d'encode le fait que l'action 2 doit etre differente de l'action1 -
 */
type Turn2 = {1: ActionA, 2: ActionA} | {1: ActionB, 2: ActionB}

