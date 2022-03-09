/**
	Displays the title screen and menu.
	Code by Rob Kleffner, 2011
*/

Mario.TitleState = function() {
    this.drawManager = null;
    this.camera = null;
    this.logoY = null;
    this.bounce = null;
    this.font = null;
};

Mario.TitleState.prototype = new Engine.GameState();

Mario.TitleState.prototype.Enter = function() {
    this.drawManager = new Engine.DrawableManager();
    this.camera = new Engine.Camera();
    
    var bgGenerator = new Mario.BackgroundGenerator(2048, 15, true, Mario.LevelType.Overground);
    var bgLayer0 = new Mario.BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 2);
    bgGenerator.SetValues(2048, 15, false, Mario.LevelType.Overground);
    var bgLayer1 = new Mario.BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 1);
    
    this.title = new Engine.Sprite();
    this.title.Image = Engine.Resources.Images["title"];
    this.title.X = 0, this.title.Y = 120;
    
    this.logo = new Engine.Sprite();
    this.logo.Image = Engine.Resources.Images["logo"];
    this.logo.X = 0, this.logo.Y = 0;
    
    this.font = Mario.SpriteCuts.CreateRedFont();
    this.font.Strings[0] = { String: "Press S to Start", X: 96, Y: 120 };

    this.logoY = 20;
    
    this.drawManager.Add(bgLayer0);
    this.drawManager.Add(bgLayer1);
    
    this.bounce = 0;
	
	Mario.GlobalMapState = new Mario.MapState();
	//set up the global main character variable
	Mario.MarioCharacter = new Mario.Character();
	Mario.MarioCharacter.Image = Engine.Resources.Images["smallMario"];
	
	//Mario.PlayTitleMusic();
};

Mario.TitleState.prototype.Exit = function() {
	//Mario.StopMusic();
	
    this.drawManager.Clear();
    delete this.drawManager;
    delete this.camera;
    delete this.font;
};

Mario.TitleState.prototype.Update = function(delta) {
    this.bounce += delta * 2;
    this.logoY = 20 + Math.sin(this.bounce) * 10;
    
    this.camera.X += delta * 25;
    
    this.drawManager.Update(delta);
};

Mario.TitleState.prototype.Draw = function(context) {
    this.drawManager.Draw(context, this.camera);
    
    context.drawImage(Engine.Resources.Images["title"], 0, 120);
    context.drawImage(Engine.Resources.Images["logo"], 0, this.logoY);
    
    this.font.Draw(context, this.Camera);
};

Mario.TitleState.prototype.CheckForChange = function(context) {
    if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) {
        context.ChangeState(Mario.GlobalMapState);
    }
};