class GameplayMetrics {
    constructor() {
        this.jumps = [];
        this.grounded = [];

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

    RegisterGrounded() {
        console.log("GROUDED");
        this.grounded.push(this.GetNearestGap());
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

    RegisterDeathTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    PrintMetrics() {
        return {
            "jumps": this.jumps,
            "grounded": this.grounded,
            "timeLeft": this.timeLeft,
        };
    }
};