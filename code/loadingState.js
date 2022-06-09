/**
    State that loads all the resources for the game.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class LoadingState extends Engine.GameState {
    constructor() {
        super();
        this.Images = [];
        this.ImagesLoaded = false;
        this.ScreenColor = 0;
        this.ColorDirection = 1;
        this.ImageIndex = 0;
        this.SoundIndex = 0;
    }

    Enter() {
        this.Images = [
            { "name": "background", "src": "images/bgsheet.png" },
            { "name": "endScene", "src": "images/endscene.gif" },
            { "name": "enemies", "src": "images/enemysheet.png" },
            { "name": "fireMario", "src": "images/firemariosheet.png" },
            { "name": "font", "src": "images/font.gif" },
            { "name": "gameOverGhost", "src": "images/gameovergost.gif" },
            { "name": "items", "src": "images/itemsheet.png" },
            { "name": "logo", "src": "images/logo.gif" },
            { "name": "map", "src": "images/mapsheet.png" },
            { "name": "mario", "src": "images/mariosheet.png" },
            { "name": "particles", "src": "images/particlesheet.png" },
            { "name": "racoonMario", "src": "images/racoonmariosheet.png" },
            { "name": "smallMario", "src": "images/smallmariosheet.png" },
            { "name": "title", "src": "images/title.gif" },
            { "name": "worldMap", "src": "images/worldmap.png" },
        ];

        Engine.Resources.AddImages(this.Images);

        let testAudio = new Audio();

        if (testAudio.canPlayType("audio/mp3")) {
            Engine.Resources.AddSound("1up", "sounds/1-up.mp3", 1)
                .AddSound("breakblock", "sounds/breakblock.mp3")
                .AddSound("bump", "sounds/bump.mp3", 4)
                .AddSound("cannon", "sounds/cannon.mp3")
                .AddSound("coin", "sounds/coin.mp3", 5)
                .AddSound("death", "sounds/death.mp3", 1)
                .AddSound("exit", "sounds/exit.mp3", 1)
                .AddSound("fireball", "sounds/fireball.mp3", 1)
                .AddSound("jump", "sounds/jump.mp3")
                .AddSound("kick", "sounds/kick.mp3")
                .AddSound("pipe", "sounds/pipe.mp3", 1)
                .AddSound("powerdown", "sounds/powerdown.mp3", 1)
                .AddSound("powerup", "sounds/powerup.mp3", 1)
                .AddSound("sprout", "sounds/sprout.mp3", 1)
                .AddSound("stagestart", "sounds/stagestart.mp3", 1)
                .AddSound("stomp", "sounds/stomp.mp3", 2);
        } else {
            Engine.Resources.AddSound("1up", "sounds/1-up.wav", 1)
                .AddSound("breakblock", "sounds/breakblock.wav")
                .AddSound("bump", "sounds/bump.wav", 2)
                .AddSound("cannon", "sounds/cannon.wav")
                .AddSound("coin", "sounds/coin.wav", 5)
                .AddSound("death", "sounds/death.wav", 1)
                .AddSound("exit", "sounds/exit.wav", 1)
                .AddSound("fireball", "sounds/fireball.wav", 1)
                .AddSound("jump", "sounds/jump.wav", 1)
                .AddSound("kick", "sounds/kick.wav", 1)
                .AddSound("message", "sounds/message.wav", 1)
                .AddSound("pipe", "sounds/pipe.wav", 1)
                .AddSound("powerdown", "sounds/powerdown.wav", 1)
                .AddSound("powerup", "sounds/powerup.wav", 1)
                .AddSound("sprout", "sounds/sprout.wav", 1)
                .AddSound("stagestart", "sounds/stagestart.wav", 1)
                .AddSound("stomp", "sounds/stomp.wav", 1);
        }

        //load the array of tile behaviors
        Tile.LoadBehaviors();
    }

    Exit() {
        delete this.Images;
    }

    Update(delta) {
        if (!this.ImagesLoaded) {
            this.ImagesLoaded = true;
            let i = 0;
            for (i = 0; i < this.Images.length; i++) {
                if (Engine.Resources.Images[this.Images[i].name].complete !== true) {
                    this.ImagesLoaded = false;
                    break;
                }
            }
        }

        this.ScreenColor += this.ColorDirection * 255 * delta;
        if (this.ScreenColor > 255) {
            this.ScreenColor = 255;
            this.ColorDirection = -1;
        } else if (this.ScreenColor < 0) {
            this.ScreenColor = 0;
            this.ColorDirection = 1;
        }
    }

    Draw(context) {
        if (!this.ImagesLoaded) {
            var color = parseInt(this.ScreenColor, 10);
            context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
            context.fillRect(0, 0, 640, 480);
        } else {
            context.fillStyle = "rgb(0, 0, 0)";
            context.fillRect(0, 0, 640, 480);
        }
    }

    CheckForChange(context) {
        if (this.ImagesLoaded) {
            //set up the global map state variable
            Mario.GlobalMapState = new MapState();

            context.ChangeState(new (Mario.PLAY_PROTOTYPE ? PredefinedTitleState : TitleState)());
        }
    }
};