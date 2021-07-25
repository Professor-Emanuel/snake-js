function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.foodAte = 0;
    this.snakeTail = [];

    //FUNCTION to fill the rectangle canvas
    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";

        for(let i=0; i<this.snakeTail.length; i++){
            ctx.fillRect(this.snakeTail[i].x , this.snakeTail[i].y , scale, scale);
        }

        ctx.fillRect(this.x , this.y , scale, scale);
    }

    this.update = function(){

        for(let i=0; i<this.snakeTail.length - 1; i++){
            this.snakeTail[i] = this.snakeTail[i + 1];
        }

        this.snakeTail[this.foodAte - 1] = {x: this.x, y: this.y};

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }

        if(this.x < 0){
            this.x = canvas.width;
        }

        if(this.y > canvas.height){
            this.y = 0;
        }

        if(this.y < 0){
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up': 
            this.xSpeed = 0;
            this.ySpeed = -scale *1;
            break;

            case 'Down': 
            this.xSpeed = 0;
            this.ySpeed = scale *1;
            break;

            case 'Left': 
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
            break;

            case 'Right': 
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
            break;
        }
    }

    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.foodAte++;
            return true;
        }

        return false;
    }
}

