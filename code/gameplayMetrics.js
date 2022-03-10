class GameplayMetrics {
    constructor() {
        this.noJumps = 0;
    }

    registerJump() {
        this.noJumps++;
    }
};