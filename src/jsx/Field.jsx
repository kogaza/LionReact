

class Field {
    constructor(cellNumber){
        this.cellNumber = cellNumber;
        this.availableCells = [];
    }
    neighbor() {
        console.log("numer",this.cellNumber);
               
        switch (this.cellNumber) {
            case 0:
                this.availableCells = [
                    this.cellNumber + 1,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 1:
                this.availableCells = [
                    this.cellNumber - 1,
                    this.cellNumber + 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 2:
                this.availableCells = [
                    this.cellNumber - 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3
                ];
                break;
            case 3:
                this.availableCells = [
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber + 1,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 4:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber - 1,
                    this.cellNumber + 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 5:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3
                ];
                break;
            case 6:
                this.availableCells = [
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber + 1,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 7:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber - 1,
                    this.cellNumber + 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3,
                    this.cellNumber + 4
                ];
                break;
            case 8:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 1,
                    this.cellNumber + 2,
                    this.cellNumber + 3
                ];
                break;
            case 9:
                this.availableCells = [
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber + 1
                ];
                break;
            case 10:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 2,
                    this.cellNumber - 1,
                    this.cellNumber + 1
                ];
                break;
            case 11:
                this.availableCells = [
                    this.cellNumber - 4,
                    this.cellNumber - 3,
                    this.cellNumber - 1
                ];
                break;
        }
        console.log("sąsiedzi",this.availableCells);

    }
 
}

let nowy = new Field(6);
// console.log(nowy);
nowy.neighbor();

module.exports = Field;