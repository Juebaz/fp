import { Optional } from "../commonMonads/Optional"

// ********** PART 1 ********** 

// clim and heather cannot be working at the same time (2 state interdependant -> merge them !)
type ControlDevice = {
    furnace: boolean,
    clim: boolean, 
    irrigation: boolean 
}

// PART 1 SLN

type Devices = {
    temperatureControl : "furnace" | "clim" | undefined,   // Optional would be nicer Optional<TemparatureDevice> TemperatureDevice = "clim" | "furnace"
    irrigation: boolean
}


// ***************** PART2 ***************
// Now we have 2 type of cooling device & 2 type of heating device

// heating = geothermie OU/ET furnace
// cooling = fan Et/OU clim


// Sln 1 
type Heater = { type: 'heater', geothermy: boolean, furnace: boolean }
type Cooling = { type: 'cooling', fan: boolean, clim: boolean}

// downside : permet d'avoir tout les appareil a false qu'on a un appareil qui doit etre a on..

type ControlDevice2 = {
    temparatureControler: Heater | Cooling | undefined,
    irrigation: boolean
}


// sln 2 

type HeatingDevice = "geothermy" | "furnace"
type CoolingDevice = "clim" | "fan"

type Cooling2 = {type: 'Cooling', device: CoolingDevice, device2: Optional<CoolingDevice>} 
type Heating2 = {type: 'Heating', device: HeatingDevice, device2: Optional<HeatingDevice>} 


// downside: peut passer 2 fois le meme appareil comme device 2
// (+): oblige d'avoir au moins un appareil on si on met un Heating ou Cooling control.
type ControlDevice3 = {
    temparatureControler: Optional<Heating2 | Cooling2>,
    irrigation: boolean
}



