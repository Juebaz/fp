import { LocationType, buildAdresse, External, Local } from "./Localization";



interface ShippingMode {
    computePrice: () => number
}

const BikeShipping = (a: Local): ShippingMode => ({
    computePrice: () => {
        return 3
    }    
})    

const CarShipping = (a: External | Local) : ShippingMode=> ({
    computePrice: () => {
        return 5
    }    
})    


const retrieveShippingOptionFor = (adresse: string) => {
    const adresse_ = buildAdresse(adresse)
    if (adresse_._type == LocationType.local){
        return [BikeShipping(adresse_), CarShipping(adresse_)]
    }
    return [CarShipping(adresse_)]
}

 const calculateShippingPrices = (adresse: string) => {
    return retrieveShippingOptionFor(adresse).map(option => ({
        option,
        price: option.computePrice()
    }))
 }

 calculateShippingPrices('234 rue fleo')