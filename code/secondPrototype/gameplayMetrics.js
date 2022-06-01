class GameplayMetrics {
    static MinRegisterDistance = 10;

    constructor() {
        this.noCoins = 0;
        this.noEnemies = 0;
        this.noPowerups = 0;
        
        this.causeOfDeath = -1;
        this.timeLeft = -1;
        this.actions = [];

        this.levelState = null;
        this.level = "";
        this.enemies = "";
        this.collectibles = "";
        this.straightSections = "";
        this.hillStraightSections = "";
    }

    SetLevelState(levelState) {
        if (levelState.GetName === undefined || levelState.GetName() !== "LevelState") {
            console.error("SetLevelState should receive an instance of LevelState");
            return;
        }

        this.levelState = levelState;
    }

    RegisterCauseOfDeath(c) {
        this.causeOfDeath = c;
    }

    RegisterJump() { }

    RegisterWallJump() { }

    RegisterLanding() { }

    RegisterNoCoins(no) {
        this.noCoins = no;
    }

    RegisterNoPowerups(no) { 
        this.noPowerups = no;
    }

    RegisterNoEnemies(no) { 
        this.noEnemies = no;
    }
    
    KilledEnemy(template) { }

    CollectedCoin(x, y) { }

    CollectedPowerup(x, y) { }

    RegisterEndingTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    SetLevel(lvl) {
        this.level = JSON.stringify(lvl);
    }

    SetEnemies(en) {
        this.enemies = en;
    }

    SetCollectibles(clt) {
        this.collectibles = clt;
    }

    SetStraightSections(strSec) {
        this.straightSections = strSec;
    }

    SetHillStraightSections(hillStrSec) {
        this.hillStraightSections = hillStrSec;
    }

    PrintMetrics() {
        return {
            "noCoins": this.noCoins,
            "noEnemies": this.noEnemies,
            "noPowerups": this.noPowerups,
            "level": this.level,
            "enemies": this.enemies,
            "straightSections": this.straightSections,
            "hillStraightSections": this.hillStraightSections,
            "collectibles": this.collectibles,
            "actions": this.actions,
            "timeLeft": this.timeLeft,
            "causeOfDeath": this.causeOfDeath
        };
    }

    SetActions(a) {
        this.actions = Object.assign([], a);
    }
};