/**
    Simple demo of the engine.
    Code by Rob Kleffner, 2011
*/

Engine.Application = function () {
    this.canvas = null;
    this.timer = null;
    this.stateContext = null;
};

Engine.Application.prototype = {
    Update: function (delta) {

        this.stateContext.Update(delta);

        this.canvas.BeginDraw();

        this.stateContext.Draw(this.canvas.BackBufferContext2D);

        this.canvas.EndDraw();
    },

    Initialize: function (defaultState, resWidth, resHeight) {
        this.canvas = new Engine.GameCanvas();
        this.timer = new Engine.GameTimer();
        Engine.KeyboardInput.Initialize();
        this.canvas.Initialize("canvas", resWidth, resHeight);
        this.timer.UpdateObject = this;

        this.stateContext = new Engine.GameStateContext(defaultState);

        this.timer.Start();
    }
};