const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d") // ctx == context, but you can name any way the variable
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;


(function setup(){
    snake = new Snake();
    fruit = new Fruit();

    fruit.randomLocation();
    console.log(fruit);

    window.setInterval( () =>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        snake.update();
        fruit.draw();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.randomLocation();
            
        }

    }, 250);
}());

window.addEventListener('keydown', ( (myEvent) =>{
    console.log(myEvent);
    const direction = myEvent.key.replace('Arrow', '');
    console.log(direction);
    snake.changeDirection(direction);
}))