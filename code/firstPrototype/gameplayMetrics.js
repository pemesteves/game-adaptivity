class GameplayMetrics {
    constructor() {
        this.jumps = [];
        this.landings = [];
        
        this.coins = [];
        this.noCoins = -1;

        this.powerups = [];
        this.noPowerups = -1;

        // TODO Implement enemy death detection
        this.enemies = [];
        this.noEnemies = -1;

        this.timeLeft = -1;

        this.levelState = null;
    }

    SetLevelState(levelState) {
        if (levelState.GetName === undefined || levelState.GetName() !== "LevelState") {
            console.error("SetLevelState should receive an instance of LevelState");
            return;
        }

        this.levelState = levelState;
    }

    RegisterJump() {
        console.log("JUMP");
        this.jumps.push(this.GetNearestGap());
    }

    RegisterLanding() {
        console.log("LANDING");
        this.landings.push(this.GetNearestGap());
    }

    RegisterNoCoins(no) {
        this.noCoins = no; 
    }

    RegisterNoPowerups(no) {
        this.noPowerups = no; 
    }

    RegisterNoEnemies(no) {
        this.noEnemies = no; 
    }

    CollectedCoin(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;
        
        const ID = lvl.GetCoinID(x, y);
        if (ID === null) {
            console.error("ERROR: Coin doesn't exist!");
            return;
        }

        this.coins.push(ID);
    }

    CollectedPowerup(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;
        
        const ID = lvl.GetPowerupID(x, y);
        if (ID === null) {
            console.error("ERROR: Powerup doesn't exist!");
            return;
        }

        this.powerups.push(ID);
    }

    KilledEnemy(ID) {
        this.enemies.push(ID);
    }

    GetNearestGap() {
        const xPos = (Mario.MarioCharacter.X - 8) / 16, facing = Mario.MarioCharacter.Facing;
        const jumps = this.levelState.Level.JumpSections;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos < jumps[i].GetHoleStartX()) {
                const dist = jumps[i].GetHoleStartX() - xPos;
                if (dist > minDist) break;

                minDist = dist;
            } else if (xPos > jumps[i].GetHoleEndX()) {
                const dist = xPos - jumps[i].GetHoleEndX();
                if (dist > minDist) break;

                minDist = dist;
            } else {
                console.log("Inside gap: Jumping on walls");
            }
        }

        return minDist;
    }

    RegisterEndingTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    PrintMetrics() {
        return {
            "jumps": this.jumps,
            "landings": this.landings,
            "timeLeft": this.timeLeft,
            "noCoins": this.noCoins,
            "collectedCoins": this.coins,
            "noPowerups": this.noPowerups,
            "collectedPowerups": this.powerups,
        };
    }
};