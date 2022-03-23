/**
    Represents a Mario agent.
    Code by Pedro Esteves, 2022.
**/

class Agent extends NotchSprite {
    constructor(actions) {
        super();
        this.actions = actions;
        
        this.ticks = 0;
        this.time = 0;
        this.currentEvent = 0;
    }

    Update(delta) {
        this.time += delta;

        this.ticks++;
    }

    StoreActions() {
        console.log(this.ticks);
    }
};