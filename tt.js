class BlockFactory {
    static makeBlock(color){
        const colorMap = {
            "b":{"src":"resources/BlockBlue.png"},
            "g":{"src":"resources/BlockGreen.png"},
            "o":{"src":"resources/BlockOrange.png"},
            "r":{"src":"resources/BlockRed.png"},
            "s":{"src":"resources/BlockSky.png"},
            "v":{"src":"resources/BlockViolet.png"},
            "y":{"src":"resources/BlockYellow.png"},
            "e":{"src":"resources/BlockGray.png"},
        }
        const src = colorMap[color].src;
        return new Block(src);
    }
}

class BlockPool {
    constructor(){

    }
    getBlock(color){

    }
}

class Block{
    constructor(src){
        this.IMAGE_SIZE = 16;
        this.image = new Image();
        this.image.src = src;
        this.image.style.position = "absolute";
        this.x = 0;
        this.y = 0;
        this.image.style.left = `${this.x}px`;
        this.image.style.top = `${this.y}px`;
    }
    moveTo(x, y) {
        if(this.x !== x){
            this.image.style.left = `${this.IMAGE_SIZE * x}px`;
            this.x = x;
        }
        if(this.y !== y){
            this.image.style.top = `${this.IMAGE_SIZE * y}px`;
            this.y = y;
        }
    }
    hide(){
        this.image.style.display = "none";
    }
    show(){
        this.image.style.display = "block";
    }
}

class Tetris{
    constructor(board){
        this.board = board;
        this.blocks = [
            
        ];
        this.movingBlocks = [
            {x:0, y:0, color:"b"},
            {x:1, y:1, color:"r"},
            {x:1, y:0, color:"e"},
            {x:0, y:1, color:"o"},
        ]
        this.cmd = {
            up:(block) => {
                block.moveTo(block.x, block.y - 1);
            },
            right:(block) => {
                block.moveTo(block.x + 1, block.y);
            },
            down:(block) => {

            },
            left:3,
            put:4, 
            rr:5, 
            lr:6
        }
    }

    render(){
        this.movingBlocks.forEach(item => {
            if(item.block === undefined){
                item.block = BlockFactory.makeBlock(item.color);
                this.board.appendChild(item.block.image);
            }
            item.block.moveTo(item.x, item.y);
            
        });
    }

    moveBlocks(direction){
        
    }

    input(key){

    }

    clear(){

    }
}