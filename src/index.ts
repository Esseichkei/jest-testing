const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;
function sanitizeDate (date: Date): Date {
    date.setHours(1); // setting a Date object without time sets it to 1:00 AM for some god-forsaken reason
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}
class Room {
    name: string;
    bookings: Array<Booking>;
    rate: number;
    discount: number;
    constructor({name, bookings, rate, discount}: {name: string, bookings: Array<Booking>, rate: number, discount: number}) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }
    isOccupied(date: Date): boolean {
        date = sanitizeDate(date);
        return this.bookings.reduce((occupied: boolean, booking: Booking) => occupied ? true :
            (booking.checkIn.getTime() <= date.getTime() && (booking.checkOut.getTime() - DAY_MILLISECONDS) >= date.getTime()), false);
    }
    occupancyPercentage(startDate: Date, endDate: Date): number {
        startDate = sanitizeDate(startDate);
        endDate = sanitizeDate(endDate);
        if (startDate.getTime() > endDate.getTime()) {
            console.error("occupancyPercentage() bad args: invalid interval")
            return 0;
        }
        let daysTotal = 0, daysOccupied = 0;
        let checkDate = startDate.getTime();
        while (checkDate <= endDate.getTime()) {
            if (this.isOccupied(new Date(checkDate))) {
                daysOccupied++;
            }
            daysTotal++;
            checkDate += DAY_MILLISECONDS;
        }
        console.log("daysOccupied / daysTotal: " + daysOccupied + " / " + daysTotal);
        return Number(((daysOccupied * 100) / daysTotal ).toFixed(2));
    }
    static totalOccupancyPercentage (rooms: Array<Room>, startDate: Date, endDate: Date): number {
        return Number((rooms.reduce((sum: number, room: Room): number => sum + room.occupancyPercentage(startDate, endDate), 0) / rooms.length).toFixed(0));
    }
    static availableRooms(rooms: Array<Room>, startDate: Date, endDate: Date) {
        return rooms.filter((room) => room.occupancyPercentage(startDate, endDate) === 0);
    }
}
class Booking {
    checkIn: Date;
    checkOut: Date;
    name: string;
    email: string;
    discount: number;
    room: Room;
    constructor({name, email, checkIn, checkOut, discount, room} : {name: string, email: string, checkIn: Date, checkOut: Date, discount: number, room: Room}) {
        checkIn = sanitizeDate(checkIn);
        checkOut = sanitizeDate(checkOut);
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }
    get fee() {
        return Number((this.room.rate * (this.discount + this.room.discount < 100 ? 1 - ((this.discount + this.room.discount)/ 100): 0)).toFixed(0));
    }
}

module.exports = {Room, Booking};