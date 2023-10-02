class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;



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


    mul() {
        if (this.energy >= 12) {
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 2;

                var newGrass = new GrassEater(newX, newY, 1);
                grassEaterArr.push(newGrass);

            }
        }

    }

    eat() {
        var emptyCells = this.chooseCell(1)
        var newCell = random(emptyCells)

        if (newCell) {
            this.energy++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
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
            this.energy--
            var emptyCells = this.chooseCell(0)
            var newCell = random(emptyCells)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[this.y][this.x] = 0;
                this.y = newY
                this.x = newX
                matrix[newY][newX] = 2;
            }
        }
        else {
            this.die();
        }
    }
    die() {
        // if (this.energy <= 0)
        matrix[this.y][this.x] = 0;

        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}