// ********** PART 1 ********** 

import { Optional } from "../../commonMonads/Optional";
import { Furnace, isHeating, isStandBy } from "./Furnace";

// clim and furnace cannot be working at the same time (2 state interdependant -> merge them !)


type NaiveControl1 = {
    clim: boolean, 
    furnace: boolean
}

// sln

type Control1 = "clim" | "furnace" | "standBy";


// PART 2: different device peer type of temperature control 

type NaiveControl2 = {
    clim: boolean,
    fans: boolean, 
    furnace: boolean,
    heatPump: boolean
}

//sln

type Heating = {type : 'heating', furnace: boolean, heatPump: boolean}
type Cooling = {type : 'cooling', fan: boolean, clim: boolean}
type StandBy = {type : 'standBy'}

type Control2 = Heating | Cooling | StandBy;


// sln 2

type HeatingDevice = "furnace" | "heatPump"
type CoolingDevice = "fans" | "clim"

type Heating3 = {type: 'heating', stage1: HeatingDevice, state2: Optional<HeatingDevice>}
type Cooling3 = {type: 'cooling', stage1: CoolingDevice, state2: Optional<CoolingDevice>}
type StandBy3 = {type: 'standBy' }

type Control3 = Heating3 | Cooling3 | StandBy3;


/// PART 3 : Cannot stop while furnace is in startState

// en classe naive solution
        class NaiveFurnace4 {
            private readonly  isOn: boolean;
            private readonly isStarting: boolean;

            private constructor(isOn: boolean, isStarting: boolean){
                this.isOn = isOn;
                this.isStarting = false;
            }

            public turnOn(){
                return new NaiveFurnace4(true, true)
            }

            //beark + testing needed here
            public turnOff(){
                if (this.isStarting){
                    // handle the fact that it cannot be started: Either throw or return a result? 
                }
                return new NaiveFurnace4(false, false)
            }
        }


// sln see Furnace.ts
const functionToStopFurncae = (aFurnace: Furnace): Furnace => {
    // CLient decide what to do in the case where the furnace cannot be stopped. Our domain module do not take that decision.
    if (isHeating(aFurnace)){
        return aFurnace.turnOff()
    }
    return aFurnace
}
