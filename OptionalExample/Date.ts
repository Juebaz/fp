import { Optional } from "../monads/Optional"

type Event = { date: Optional<string>, date2: string | undefined, type: string, adultOnly: boolean, location: Optional<string> }

declare function toDate(date: string): Optional<Date>
declare function toDDMMYYY(date: Date): string

const formatDueDate = (event: Event) => {
    event.date
        .andThen(toDate)
        .map(toDDMMYYY)
        .withDefault("no date available")    
}

declare function toDate2(date: string): Date | undefined

const formatDueDate2 = (event: Event) => {
    if (event.date2){
        const date = toDate2(event.date2)

        if (date){
            return toDDMMYYY(date)
        }
    }
    return "no date available"
}