/**
    Represents a Mario agent, controlled by the player. Allows to store the player actions
    Code by Pedro Esteves, 2022.
**/

class PlayerAgent extends Agent {
    constructor() {
        super([]);

        document.addEventListener('keydown', this.StoreEvent.bind(this));
        document.addEventListener('keyup', this.StoreEvent.bind(this));
    }

    StoreEvent(evt) {
        // Only store events from keys related to the gameplay
        if (evt.keyCode !== Engine.Keys.A && evt.keyCode !== Engine.Keys.S && evt.keyCode !== Engine.Keys.Left && evt.keyCode !== Engine.Keys.Right) return;

        this.actions.push({
            't': this.ticks, // Ticks
            'k': evt.keyCode, // Key Code
            'e': evt.type // Event Type
        });
    }

    StoreActions() {
        console.log(JSON.stringify(this.actions)); // TODO Store in JSON file or send to server ?
    }
};