import { Module } from "module";

type Event = { date: string, type: string, adultOnly: boolean, location?: string }

type Adress = { country: string, adress: string, postalCode: string, appartement: string | undefined }

interface LocationService {
    getAdress: (position: string) => Adress | undefined
}

const getAppartement = (event: Event, locationService: LocationService): string | undefined => {
    const noAppartMsg = "No appartment provided";

    if (!event.location) {
        return noAppartMsg
    }
    
    const adress = locationService.getAdress(event.location);

    if (!adress){
        return noAppartMsg
    }

    if (!adress.appartement){
        return noAppartMsg
    }

    return `The appartement number is ${adress.appartement}`
}

