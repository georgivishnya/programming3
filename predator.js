class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.multiply = 0;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0]; //!
            var y = this.directions[i][1]; //!
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {  //0
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }


    // mul () {
    //         this.multiply++;
    //         var emptyCells = this.chooseCell(2);
    //         var newCell = random(emptyCells);

    //         if(newCell && this.multiply >= 8){
    //             var newX = newCell[0];
    //             var newY = newCell[1];
    //             matrix[newY][newX] = 3;

    //             var newPredator = new Predator(newX, newY, 1);
    //             predatorArr.push(newPredator);
    //             this.multiply = 0;
    //         }
    //     }
    // mul() {
    //     if (this.energy >= 12) {
    //         var emptyCells = this.chooseCell(2);
    //         var newCell = random(emptyCells);

    //         if (newCell) {
    //             var newX = newCell[0];
    //             var newY = newCell[1];
    //             matrix[newY][newX] = 3;

    //             var newpredator = new Predator(newX, newY, 1);
    //             predatorArr.push(newpredator);

    //         }
    //     }
    // }

    mul() {
        if (this.energy >= 12) {
            var emptyCells = this.chooseCell(2);
            var newCell = random(emptyCells);

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 3;

                var newpredator = new Predator(newX, newY, 1);
                predatorArr.push(newpredator);

            }
        }
    }



    eat() {
        var emptyCells = this.chooseCell(2)
        var newCell = random(emptyCells)
        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
         else {
             this.move();

         }
    }
    
    move() {
       
        if (this.energy > 0) {
            this.energy--;
            var emptyCells = this.chooseCell(0)
            var newCell = random(emptyCells)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[this.y][this.x] = 0;
                this.y = newY
                this.x = newX
                matrix[newY][newX] = 3;
            }
        }
        else {
            this.die();
        }
    }
    die() {
            matrix[this.y][this.x] = 0;
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}