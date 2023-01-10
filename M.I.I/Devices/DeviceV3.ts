import { Optional } from "../../commonMonads/Optional";
import { Furnace, HeatingFurnace, StartingFurnace } from "./Furnace";



type HeatingDevice = {device: HeatingFurnace | StartingFurnace, type: 'furnace'} | { type: 'heatPump' }
type CoolingDevice = {type : "clim"}

type Cooling = {type: 'cooling', stage1: CoolingDevice, state2: Optional<CoolingDevice>}
type Heating = {type: 'heating', stage1: HeatingDevice, state2: Optional<HeatingDevice>}
type StandBy = {type: 'standBy'}

type DeviceControl = Heating | Cooling | StandBy;

