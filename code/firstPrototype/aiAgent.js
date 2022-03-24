/**
    Represents a Mario agent, controlled by AI. Allows to play a sequecen of player actions
    Code by Pedro Esteves, 2022.
**/

class AIAgent extends Agent {
    constructor(actions) {
        super(actions);
    }

    Update(delta) {
        super.Update(delta);

        while (true) {
            const evt = this.actions[this.currentEvent]
            if (!(this.currentEvent < this.actions.length && evt.ticks <= this.ticks)) break;

            document.dispatchEvent(new KeyboardEvent(evt.event, { 'keyCode': evt.keycode }));

            this.currentEvent++;
        }
    }
};