const Cinema = class{
    constructor(rows, seatsPerRow) {
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;
        this.occupiedSeats = new Array();
    }

    freeSeats(){
        console.log( this.seatsPerRow * this.rows-this.occupiedSeats.length);
    }
    occupiedSeats(){
        console.log( this.occupiedSeats.length);
    }

    reserveSeat(row, number){
        const seat = new Seat(3,5)
        if(this.occupiedSeats.find(seat => seat.number ===number && seat.numberRow ===row)){
            console.log('This seat is already occupied');
            return;
        }
        seat.setOccupation();
        this.occupiedSeats.push(seat);
        console.log('Your seat is reserved');
    }
}

const Seat = class{
    constructor(numberRow, number) {
        this.number = number;
        this.numberRow = numberRow;
        this.occupied = false;
    }

    setOccupation(){
        this.occupied = true;
    }

}
const cinema = new Cinema(5,10);
cinema.freeSeats();
cinema.reserveSeat(3,5)
cinema.freeSeats();
cinema.reserveSeat(3,5)
