class Vampir  extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 10;
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
    chooseCell(character,nnnm,nnn) {
        this.getNewCoordinates()
        return super.chooseCell(character)
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
            var emptyCells = this.chooseCell(1, 2, 3);
            var newCell = random(emptyCells);

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 5;

                var newvampir = new Vampir(newX, newY, 1);
                vampirArr.push(newvampir);

            }
        }
    }



    eat() {
        var emptyCells = this.chooseCell(1, 2, 3)
        var newCell = random(emptyCells)
        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
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
                matrix[newY][newX] = 5;
            }
        }
        else {
            this.die();
        }
    }
    die() {
        if(this.energy <= 0)
                    matrix[this.y][this.x] = 0;
        for (var i in vampirArr) {
            if (this.x == vampirArr[i].x && this.y == vampirArr[i].y) {
                vampirArr.splice(i, 1);
                break;
            }
        }
    }
}