import { Module } from "module"
import { Optional } from "../monads/Optional"

type Event = { date: Optional<string>, date2: string | undefined, type: string, adultOnly: boolean, location: Optional<string> }

type Adress = { country: string, adress: string, postalCode: string, appartement: Optional<string> }

interface LocationService {
    getAdress: (position: string) => Optional<Adress>
}

const appartementLabel = (event: Event, locationService: LocationService): string => {
  const noAppartMsg = "No appartment provided";

  return event.location
      .andThen(locationService.getAdress)
      .andThen(adress => adress.appartement)
      .map(appartment => `The appartement number is ${appartment}`)
      .withDefault(noAppartMsg)
}



