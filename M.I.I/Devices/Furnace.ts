enum FurnaceStage  {
    Heating = "heating", 
    Starting = "starting",
    StandBy = "standBy"
} 
    

export type StartingFurnace = {state: FurnaceStage.Starting}
export type HeatingFurnace = {state: FurnaceStage.Heating, turnOff: () => StandByFurnace}
export type StandByFurnace = {state: FurnaceStage.StandBy, turnOn: () => StartingFurnace}


/**
 * 
 * No testing needed.
 * 
 *  */  

export const StandByFurncace = (): StandByFurnace => {
    return {
        state: FurnaceStage.StandBy,
        turnOn: () => StartingFurnace()
    }
}

export const HeatingFurnace = (): HeatingFurnace => {
    return {
        state: FurnaceStage.Heating,
        turnOff: () => StandByFurncace()
    }
}

export const StartingFurnace = (): StartingFurnace => {
    return {
        state: FurnaceStage.Starting,
    }
}

export const isHeating = (furnace: Furnace): furnace is HeatingFurnace=> {
    return furnace.state === FurnaceStage.Heating
}

export const isStarting = (furnace: Furnace): furnace is StartingFurnace=> {
    return furnace.state === FurnaceStage.Starting
}

export const isStandBy = (furnace: Furnace): furnace is StandByFurnace => {
    return furnace.state === FurnaceStage.StandBy
}

export type Furnace = StartingFurnace | HeatingFurnace | StandByFurnace