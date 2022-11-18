import { LocalizationService } from "./LocalizationService"

export type External = { _type: LocationType.external, adresse: String}
export type Local = {_type: LocationType.local, adresse: String}
export type Localization = Local | External 

export enum LocationType {
    local = 'local',
    external = 'external'
}
export const buildAdresse = (a: string) : Localization => {
    // pas important mais retourne is l'adresse est local au magasin
    if (LocalizationService.isLocal(a)){
        return {_type: LocationType.local, adresse: a}
    }
    return { _type: LocationType.external, adresse: a}
}