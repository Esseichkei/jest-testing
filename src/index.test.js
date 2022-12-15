const { Room, Booking } = require("./index");

const roomNames = ['Oceanview 101', 'Oceanview 102', 'Oceanview 103', 'Oceanview 104'];
const roomRates = [10000, 15000, 50000, 20000];
const roomDiscounts = [10, 40, 0, 70];
const clientNames = ['Albert Hepburn', 'Javier Martinez', 'Yukiko Sakamoto', 'Valerie White'];
const clientEmails = ['alhepburn@hotmail.com', 'jmartinez@gmail.com', 'sakamotoyukiko@hotline.com', 'valeriewhite@yahoo.com'];
const bookingCheckIns = [new Date('2022-11-20'), new Date('2022-12-01'), new Date('2022-11-23'), new Date('2022-11-26')];
const bookingCheckOuts = [new Date('2022-12-02'), new Date('2022-12-03'), new Date('2022-11-29'), new Date('2022-12-04')];
const bookingDiscounts = [50, 30, 45, 60];

test('check for occupancy 1', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.isOccupied(new Date('2022-11-30'))).toBe(true);
});
test('check for occupancy 2', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.isOccupied(new Date('2022-11-19'))).toBe(false);
});
test('check for occupancy 3', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.isOccupied(new Date('2022-12-02'))).toBe(false);
});
test('check for occupancy 4', () => {
    const roomOne = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomOne}));
    roomOne.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomOne}));
    expect(roomOne.isOccupied(new Date('2022-11-30'))).toBe(false);
});
test('check for occupancy 5', () => {
    const roomOne = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomOne}));
    roomOne.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomOne}));
    expect(roomOne.isOccupied(new Date('2022-12-01'))).toBe(true);
});

test('check for occupancy percentage 1', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.occupancyPercentage(new Date('2022-11-20'), new Date('2022-11-30'))).toBe(100);
});
test('check for occupancy percentage 2', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.occupancyPercentage(new Date('2022-11-10'), new Date('2022-11-15'))).toBe(0);
});
test('check for occupancy percentage 3', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    expect(roomOne.occupancyPercentage(new Date('2022-12-01'), new Date('2022-12-02'))).toBe(50);
});
test('check for occupancy percentage 4', () => {
    const roomOne = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomOne}));
    roomOne.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomOne}));
    expect(roomOne.occupancyPercentage(new Date('2022-11-28'), new Date('2022-12-01'))).toBe(50);
});
test('check for occupancy percentage 5', () => {
    const roomOne = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomOne}));
    roomOne.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomOne}));
    expect(roomOne.occupancyPercentage(new Date('2022-11-28'), new Date('2022-12-02'))).toBe(60);
});

test('check for occupancy across several rooms 1', () => {
    const roomTwo = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomTwo.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomTwo}));
    roomTwo.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomTwo}));
    
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    
    const roomsArray = [roomOne, roomTwo];
    expect(Room.totalOccupancyPercentage(roomsArray, new Date('2022-11-28'), new Date('2022-12-01'))).toBe(75);
});
test('check for occupancy across several rooms 2', () => {
    const roomTwo = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomTwo.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomTwo}));
    roomTwo.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomTwo}));
    
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    
    const roomThree = new Room ({
        name: roomNames[1],
        rate: roomRates[1],
        discount: roomDiscounts[1],
        bookings: []
    });
    const roomsArray = [roomOne, roomTwo, roomThree];
    expect(Room.totalOccupancyPercentage(roomsArray, new Date('2022-11-28'), new Date('2022-12-01'))).toBe(50);
});

test('check for available rooms 1', () => {
    const roomTwo = new Room({
        name: roomNames[2],
        rate: roomRates[2],
        discount: roomDiscounts[2],
        bookings: []
    });
    roomTwo.bookings.push(new Booking({name :clientNames[1],
        email: clientEmails[1],
        checkIn: bookingCheckIns[1],
        checkOut: bookingCheckOuts[1],
        discount: bookingDiscounts[1],
        room: roomTwo}));
    roomTwo.bookings.push(new Booking({name :clientNames[2],
        email: clientEmails[2],
        checkIn: bookingCheckIns[2],
        checkOut: bookingCheckOuts[2],
        discount: bookingDiscounts[2],
        room: roomTwo}));
    
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    
    const roomsArray = [roomOne, roomTwo];
    expect(Room.availableRooms(roomsArray, new Date('2022-11-28'), new Date('2022-12-01'))).toEqual([]);
});

test('check for discounted fee 1', () => {
    const roomOne = new Room({
        name: roomNames[0],
        rate: roomRates[0],
        discount: roomDiscounts[0],
        bookings: []
    });
    roomOne.bookings.push(new Booking({name :clientNames[0],
        email: clientEmails[0],
        checkIn: bookingCheckIns[0],
        checkOut: bookingCheckOuts[0],
        discount: bookingDiscounts[0],
        room: roomOne}));
    
    expect(roomOne.bookings[0].fee).toBe(4000);
});