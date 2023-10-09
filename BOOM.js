class Boom  extends LivingCreature{

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in boomArr) {
            if (this.x == boomArr[i].x && this.y == boomArr[i].y) {
                boomArr.splice(i, 1);
                break;
            }
        }
    }




    explode() {
        for (var i in this.directions) {
                let x = this.directions[i][0]
                let y = this.directions[i][1]
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                console.log(x, y);
                matrix[y][x] = 0
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in grassEaterArr) {
                    if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in predatorArr) {
                    if (x == predatorArr[i].x && y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in vampirArr) {
                    if (x == vampirArr[i].x && y == vampirArr[i].y) {
                        vampirArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
        this.die()
    }









}