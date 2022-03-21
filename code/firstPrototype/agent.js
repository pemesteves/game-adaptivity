/**
    Represents a Mario AI agent.
    Code by Pedro Esteves, 2022.
**/

class Agent extends NotchSprite {
    constructor() {
        super();
        this.actions = [
            {
                'time': 5,
                'keycode': 68,
                'event': 'keydown',
            },
            {
                'time': 10,
                'keycode': 68,
                'event': 'keyup',
            }
        ];

        this.time = 0;
        this.currentEvent = 0;
    }

    Update(delta) {
        this.time += delta;

        while(true) {
            const evt = this.actions[this.currentEvent]
            if (!(this.currentEvent < this.actions.length && evt.time <= this.time)) break;
                
            document.dispatchEvent(new KeyboardEvent(evt.event, {'keyCode': evt.keycode}));

            this.currentEvent++;
        }
    }
}