
Tetris = window.Tetris || {};
Tetris.Game = Tetris.Game || {};
Tetris.Game.Phaser = Phaser;

Tetris.Game.preload = function () {
    this.load.setBaseURL('http://labs.phaser.io');
    
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
};

Tetris.Game.create = function () {

    this.add.image(400, 300, 'sky');
    
    var particles = this.add.particles('red');
    
    var emitter = particles.createEmitter({
        speed: 100,
        scale: {start: 1, end: 0},
        blendMode: 'ADD'
    });
    
    var logo = this.physics.add.image(400, 100, 'logo');
    
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
};

Tetris.Game.Config = {
    type: Phaser.Auto,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            }
        }
    },
    scene: {
        preload: Tetris.Game.preload,
        create: Tetris.Game.create
    }
};

Tetris.Game.main = new Tetris.Game.Phaser.Game(Tetris.Game.Config);
