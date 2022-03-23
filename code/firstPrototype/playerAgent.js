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
        this.actions.push({
            'ticks': this.ticks,
            'keycode': evt.keyCode, // TODO fix because it is deprecated?
            'event': evt.type
        });
    }

    StoreActions() {
        console.log(JSON.stringify(this.actions)); // TODO Store in JSON file or send to server ?
        console.log(this.ticks);
    }
};