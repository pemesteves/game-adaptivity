/**
    Represents a Mario agent.
    Code by Pedro Esteves, 2022.
**/

class Agent {
    constructor(actions) {
        this.actions = actions;

        this.ticks = 0;
        this.time = 0;
    }

    Update(delta) {
        this.time += delta;

        this.ticks++;
    }

    GetActions() { }
};