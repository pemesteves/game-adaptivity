/**
    Class to represent an uninterrupted set of frames to animate.
*/

Engine.AnimationSequence = function (startRow, startColumn, endRow, endColumn) {
    this.StartRow = startRow;
    this.StartColumn = startColumn;
    this.EndRow = endRow;
    this.EndColumn = endColumn;

    //sometimes in an animated sprite, we want it to behave like a regular sprite (static)
    //this variable will keep it from wasting time updating animation when the sequence
    //is only a single frame long, for things like standing or pausing action
    this.SingleFrame = false;

    if ((this.StartRow == this.EndRow) && (this.StartColumn == this.EndColumn)) {
        this.SingleFrame = true;
    }
};

/**
    Subclass that extends the regular sprite with animation capability.
    Code by Rob Kleffner, 2011
*/

Engine.AnimatedSprite = function () {
    this.LastElapsed = 0;
    this.FramesPerSecond = 1 / 20;
    this.CurrentSequence = null;
    this.Playing = false;
    this.Looping = false;
    this.Rows = 0;
    this.Columns = 0;

    //cheesy dictionary hack to make animation sequences more accessible
    this.Sequences = new Object();
};

Engine.AnimatedSprite.prototype = new Engine.FrameSprite();

Engine.AnimatedSprite.prototype.Update = function (delta) {
    if (this.CurrentSequence.SingleFrame) {
        return;
    }
    if (!this.Playing) {
        return;
    }

    this.LastElapsed -= delta;

    if (this.LastElapsed > 0) {
        return;
    }

    this.LastElapsed = this.FramesPerSecond;
    this.FrameX += this.FrameWidth;

    //increment the frame
    if (this.FrameX > (this.Image.width - this.FrameWidth)) {
        this.FrameX = 0;
        this.FrameY += this.FrameHeight;

        if (this.FrameY > (this.Image.height - this.FrameHeight)) {
            this.FrameY = 0;
        }
    }

    //check if it's at the end of the animation sequence
    var seqEnd = false;
    if ((this.FrameX > (this.CurrentSequence.EndColumn * this.FrameWidth)) && (this.FrameY == (this.CurrentSequence.EndRow * this.FrameHeight))) {
        seqEnd = true;
    } else if (this.FrameX == 0 && (this.FrameY > (this.CurrentSequence.EndRow * this.FrameHeight))) {
        seqEnd = true;
    }

    //go back to the beginning if looping, otherwise stop playing
    if (seqEnd) {
        if (this.Looping) {
            this.FrameX = this.CurrentSequence.StartColumn * this.FrameWidth;
            this.FrameY = this.CurrentSequence.StartRow * this.FrameHeight;
        } else {
            this.Playing = false;
        }
    }
};

Engine.AnimatedSprite.prototype.PlaySequence = function (seqName, loop) {
    this.Playing = true;
    this.Looping = loop;
    this.CurrentSequence = this.Sequences["seq_" + seqName];
    this.FrameX = this.CurrentSequence.StartColumn * this.FrameWidth;
    this.FrameY = this.CurrentSequence.StartRow * this.FrameHeight;
};

Engine.AnimatedSprite.prototype.StopLooping = function () {
    this.Looping = false;
};

Engine.AnimatedSprite.prototype.StopPlaying = function () {
    this.Playing = false;
};

Engine.AnimatedSprite.prototype.SetFrameWidth = function (width) {
    this.FrameWidth = width;
    this.Rows = this.Image.width / this.FrameWidth;
};

Engine.AnimatedSprite.prototype.SetFrameHeight = function (height) {
    this.FrameHeight = height;
    this.Columns = this.Image.height / this.FrameHeight;
};

Engine.AnimatedSprite.prototype.SetColumnCount = function (columnCount) {
    this.FrameWidth = this.Image.width / columnCount;
    this.Columns = columnCount;
};

Engine.AnimatedSprite.prototype.SetRowCount = function (rowCount) {
    this.FrameHeight = this.Image.height / rowCount;
    this.Rows = rowCount;
};

Engine.AnimatedSprite.prototype.AddExistingSequence = function (name, sequence) {
    this.Sequences["seq_" + name] = sequence;
};

Engine.AnimatedSprite.prototype.AddNewSequence = function (name, startRow, startColumn, endRow, endColumn) {
    this.Sequences["seq_" + name] = new Engine.AnimationSequence(startRow, startColumn, endRow, endColumn);
};

Engine.AnimatedSprite.prototype.DeleteSequence = function (name) {
    if (this.Sequences["seq_" + name] != null) {
        delete this.Sequences["seq_" + name];
    }
};

Engine.AnimatedSprite.prototype.ClearSequences = function () {
    delete this.Sequences;
    this.Sequences = new Object();
};