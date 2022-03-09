/**
    Base class for all drawable objects, makes ordering automatic.
    Code by Rob Kleffner, 2011
*/

Engine.Drawable = function () {
    this.ZOrder = 0;
};

Engine.Drawable.prototype = {
    Draw: function (context) { }
};