const Cinema = class {
  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.occupiedSeats = new Array();
  }

  freeSeats() {
    console.log(this.seatsPerRow * this.rows - this.occupiedSeats.length);
  }

  occupiedSeats() {
    console.log(this.occupiedSeats.length);
  }

  showSeatStatus() {
    console.log(
      `There are ${
        this.seatsPerRow * this.rows - this.occupiedSeats.length
      } free seats and ${this.occupiedSeats.length} that are already occupied`
    );
  }

  reserveSeat(row, number) {
    if (row <= this.rows && number <= this.seatsPerRow) {
      if (
        this.occupiedSeats.find(
          (seat) => seat.number === number && seat.numberRow === row
        )
      ) {
        console.log('This seat is already occupied');
        return;
      }
      const seat = new Seat(row, number);
      seat.setOccupation();
      this.occupiedSeats.push(seat);
      console.log('Your seat is reserved');
      return;
    }
    console.log('This seat number does not exist');
  }
};

const Seat = class {
  constructor(numberRow, number) {
    this.number = number;
    this.numberRow = numberRow;
    this.occupied = false;
  }

  setOccupation() {
    this.occupied = !this.occupied;
  }
};
const cinema = new Cinema(5, 10);
cinema.showSeatStatus();
cinema.reserveSeat(3, 10);
cinema.showSeatStatus();
cinema.reserveSeat(3, 10);
