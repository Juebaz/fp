import { none, Optional } from "../../commonMonads/Optional"

type HeatingDevice = "furnace" | "heatPump"
type CoolingDevice = "fans" | "clim"

type Heating3 = {type: 'heating', stage1: HeatingDevice, state2: Optional<HeatingDevice>}
type Cooling3 = {type: 'cooling', stage1: CoolingDevice, state2: Optional<CoolingDevice>}
type StandBy3 = {type: 'standBy' }

type Control = Heating3 | Cooling3 | StandBy3;

// echange d'air -> activer juste si meme type de 

type ZoneControlNaive = {
    zoneA: Control,
    zoneB: Control
    airExchange: boolean,
}
 // etat invalide: zonea: Heating, zoneB: Cooling, airExchange: true
 type ZoneControl = {
    zoneA: Control,
    zoneB: Control
}

// export type ZoneControl = SameState<Heating3>| SameState<Cooling3> | SameState<StandBy3> | DifferentState

// fonction qui retourne airExchanger qui est declaratif. Un etat de moins a gerer.

const airExchange = (state: ZoneControl) => {
    if (state.zoneA === state.zoneB) {
        return true
    }
    return false;
}

// information qui devrait pas 
type DifferentState = {
    zoneA: Control,
    zoneB: Control,
    airExchange: false
}

type SameState<T> = {
    zoneA: T,
    zoneB: T,
    airExchange: true
}





