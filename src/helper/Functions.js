import { months, weekdays } from "../values/Strings";

export const GetNavbarDate = ( ) => {

    let dateData = {};

    const d = new Date();

    dateData.date = d.getDate();
    dateData.dayName = weekdays[d.getDay()];
    dateData.monthName = months[d.getMonth()];
    dateData.hour = d.getHours() < 10 ? "0"+d.getHours() : d.getHours();
    dateData.minutes = d.getMinutes()  < 10 ? "0"+d.getMinutes() : d.getMinutes();

    return dateData;
}