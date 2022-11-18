/**
 * Shipping service
 *  Calculate the price of the shipping depending on the adresse km + type of shipping
 *  QC city is serve by bike or car
 *  Elsewhere only by car
 * 
 */

import { LocalizationService } from "./LocalizationService"


interface ShippingMode {
    computePrice: () => number
}

const BikeShipping = (a: string): ShippingMode => ({
    computePrice: () => {
        return 3
    }    
})    

const CarShipping = (a: string) : ShippingMode=> ({
    computePrice: () => {
        return 5
    }    
})   

const retrieveShippingOptionFor = (adresse: string) => {
    if (LocalizationService.isLocal(adresse)){
        return [CarShipping(adresse), BikeShipping(adresse)]
    }

    return [CarShipping(adresse)]
}

const calculateShippingPrices = (adresse: string) => {
    return retrieveShippingOptionFor(adresse).map(option => ({
        option,
        price: option.computePrice()
    }))
 }


 calculateShippingPrices('238 rue toto, Qc, Can')




