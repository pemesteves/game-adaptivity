/**
    State for actually playing a pseudo-randomly generated level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);

        Mario.MarioCharacter.ResetMetrics();
        Mario.MarioCharacter.gameplayMetrics.SetLevelState(this);

        this.NextLevel = false;
        this.agent = new PlayerAgent();
        // AIAgent([{"t":12,"k":39,"e":"keydown"},{"t":28,"k":39,"e":"keydown"},{"t":29,"k":39,"e":"keydown"},{"t":30,"k":39,"e":"keydown"},{"t":30,"k":39,"e":"keydown"},{"t":31,"k":39,"e":"keydown"},{"t":32,"k":39,"e":"keydown"},{"t":33,"k":39,"e":"keydown"},{"t":34,"k":39,"e":"keydown"},{"t":35,"k":39,"e":"keydown"},{"t":36,"k":39,"e":"keydown"},{"t":37,"k":39,"e":"keydown"},{"t":38,"k":39,"e":"keydown"},{"t":38,"k":39,"e":"keydown"},{"t":40,"k":39,"e":"keydown"},{"t":40,"k":39,"e":"keydown"},{"t":41,"k":39,"e":"keydown"},{"t":42,"k":39,"e":"keydown"},{"t":43,"k":39,"e":"keydown"},{"t":44,"k":39,"e":"keydown"},{"t":45,"k":39,"e":"keydown"},{"t":46,"k":39,"e":"keydown"},{"t":46,"k":39,"e":"keydown"},{"t":48,"k":39,"e":"keydown"},{"t":49,"k":39,"e":"keydown"},{"t":50,"k":39,"e":"keydown"},{"t":51,"k":39,"e":"keydown"},{"t":51,"k":39,"e":"keydown"},{"t":52,"k":39,"e":"keydown"},{"t":53,"k":39,"e":"keydown"},{"t":54,"k":39,"e":"keydown"},{"t":55,"k":39,"e":"keydown"},{"t":56,"k":39,"e":"keydown"},{"t":57,"k":39,"e":"keydown"},{"t":58,"k":39,"e":"keydown"},{"t":59,"k":39,"e":"keydown"},{"t":60,"k":39,"e":"keydown"},{"t":61,"k":39,"e":"keydown"},{"t":62,"k":39,"e":"keydown"},{"t":62,"k":39,"e":"keydown"},{"t":63,"k":83,"e":"keydown"},{"t":66,"k":83,"e":"keyup"},{"t":143,"k":83,"e":"keydown"},{"t":146,"k":83,"e":"keyup"},{"t":163,"k":83,"e":"keydown"},{"t":166,"k":83,"e":"keyup"},{"t":196,"k":83,"e":"keydown"},{"t":198,"k":83,"e":"keyup"},{"t":209,"k":83,"e":"keydown"},{"t":212,"k":83,"e":"keyup"},{"t":226,"k":83,"e":"keydown"},{"t":230,"k":83,"e":"keyup"},{"t":256,"k":83,"e":"keydown"},{"t":262,"k":83,"e":"keyup"},{"t":284,"k":83,"e":"keydown"},{"t":289,"k":83,"e":"keyup"},{"t":300,"k":39,"e":"keyup"},{"t":312,"k":83,"e":"keydown"},{"t":313,"k":39,"e":"keydown"},{"t":318,"k":83,"e":"keyup"},{"t":324,"k":39,"e":"keyup"},{"t":398,"k":39,"e":"keydown"},{"t":412,"k":39,"e":"keyup"},{"t":441,"k":37,"e":"keydown"},{"t":446,"k":37,"e":"keyup"}]);
    }

    GetLevel() {
        //const lvl = new LevelGenerator(320, 15).CreateLevel(0, 1);
        const lvl = new PredefinedLevelGenerator({"Width":320,"Height":15,"ExitX":264,"ExitY":13,"Type":0,"EnemySpriteTemplates":[{"X":50,"Y":11,"SpriteTemplate":{"Type":1,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":72,"Y":11,"SpriteTemplate":{"Type":2,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":136,"Y":9,"SpriteTemplate":{"Type":1,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":182,"Y":12,"SpriteTemplate":{"Type":2,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":221,"Y":9,"SpriteTemplate":{"Type":2,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":231,"Y":4,"SpriteTemplate":{"Type":1,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}},{"X":246,"Y":12,"SpriteTemplate":{"Type":1,"Winged":false,"LastVisibleTick":-1,"IsDead":false,"Sprite":null}}],"JumpSections":[{"JS":3,"JL":3,"Length":9,"X0":91,"HasStairs":false,"Floor":13},{"JS":4,"JL":2,"Length":10,"X0":121,"HasStairs":true,"Floor":13},{"JS":3,"JL":3,"Length":9,"X0":203,"HasStairs":false,"Floor":11}],"TubeSections":[{"Length":11,"Floor":11,"XTube":55,"TubeHeight":8,"X0":52,"XTubeRndValues":[0,1],"TubeHeightRndValues":[1,1]},{"Length":8,"Floor":12,"XTube":85,"TubeHeight":10,"X0":83,"XTubeRndValues":[1],"TubeHeightRndValues":[0]},{"Length":14,"Floor":10,"XTube":102,"TubeHeight":7,"X0":100,"XTubeRndValues":[3,2],"TubeHeightRndValues":[0,0]},{"Length":5,"Floor":12,"XTube":118,"TubeHeight":10,"X0":116,"XTubeRndValues":[2],"TubeHeightRndValues":[0]}],"StraightSections":[{"X0":0,"Length":14,"Floor":14,"Decorate":null},{"X0":32,"Length":7,"Floor":13,"Decorate":{"X0":32,"X1":39,"Floor":13,"SBegin":2,"SEnd":0,"EBegin":0,"EEnd":0,"Rnd1":[2,0,1,0,2],"Rnd2":[3,0,2,1,3],"Rnd3":[0,1,2,3,3],"Rnd4":[1,3,0,3,0]}},{"X0":39,"Length":6,"Floor":12,"Decorate":{"X0":39,"X1":45,"Floor":12,"SBegin":3,"SEnd":1,"EBegin":2,"EEnd":3,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":45,"Length":7,"Floor":12,"Decorate":{"X0":45,"X1":52,"Floor":12,"SBegin":2,"SEnd":3,"EBegin":1,"EEnd":3,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":63,"Length":5,"Floor":13,"Decorate":null},{"X0":68,"Length":9,"Floor":12,"Decorate":{"X0":68,"X1":77,"Floor":12,"SBegin":1,"SEnd":3,"EBegin":3,"EEnd":0,"Rnd1":[0,1,0,0],"Rnd2":[0,2,1,2],"Rnd3":[0,3,0,1],"Rnd4":[3,2,0,0]}},{"X0":77,"Length":2,"Floor":14,"Decorate":null},{"X0":79,"Length":2,"Floor":11,"Decorate":null},{"X0":81,"Length":2,"Floor":12,"Decorate":null},{"X0":114,"Length":2,"Floor":14,"Decorate":null},{"X0":147,"Length":4,"Floor":12,"Decorate":null},{"X0":151,"Length":5,"Floor":12,"Decorate":null},{"X0":156,"Length":7,"Floor":14,"Decorate":{"X0":156,"X1":163,"Floor":14,"SBegin":0,"SEnd":2,"EBegin":0,"EEnd":0,"Rnd1":[1,2,1],"Rnd2":[0,2,1],"Rnd3":[3,2,3],"Rnd4":[3,2,2]}},{"X0":163,"Length":8,"Floor":13,"Decorate":{"X0":163,"X1":171,"Floor":13,"SBegin":2,"SEnd":3,"EBegin":0,"EEnd":3,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":196,"Length":7,"Floor":12,"Decorate":{"X0":196,"X1":203,"Floor":12,"SBegin":0,"SEnd":3,"EBegin":1,"EEnd":0,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":212,"Length":5,"Floor":13,"Decorate":null}],"HillStraightSections":[{"X0":14,"Length":18,"Floor":13,"Hrnd":[10,6],"Lrnd":[6,7],"XXOrnd":[21,20],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":-1,"Decorate":null},{"X0":131,"Length":16,"Floor":10,"Hrnd":[6],"Lrnd":[4],"XXOrnd":[138],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":0,"Decorate":{"X0":137,"X1":143,"Floor":6,"SBegin":0,"SEnd":3,"EBegin":1,"EEnd":2,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":171,"Length":10,"Floor":10,"Hrnd":[5],"Lrnd":[3],"XXOrnd":[173],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":0,"Decorate":{"X0":172,"X1":177,"Floor":5,"SBegin":0,"SEnd":3,"EBegin":0,"EEnd":3,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":181,"Length":15,"Floor":13,"Hrnd":[10,6],"Lrnd":[5,3],"XXOrnd":[184,190],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":-1,"Decorate":null},{"X0":217,"Length":10,"Floor":10,"Hrnd":[6,1],"Lrnd":[6,6],"XXOrnd":[218,218],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":-1,"Decorate":null},{"X0":227,"Length":11,"Floor":10,"Hrnd":[5],"Lrnd":[6],"XXOrnd":[230],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":0,"Decorate":{"X0":229,"X1":237,"Floor":5,"SBegin":2,"SEnd":1,"EBegin":1,"EEnd":3,"Rnd1":[],"Rnd2":[],"Rnd3":[],"Rnd4":[]}},{"X0":238,"Length":18,"Floor":13,"Hrnd":[8,5],"Lrnd":[5,7],"XXOrnd":[248,245],"Blocks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"DecorateIteration":-1,"Decorate":null}],"CannonSections":[],"CeilingRnd":[],"RunRnd":[]}).CreateLevel();
        console.log(JSON.stringify(lvl.PrintLevel()));
        return lvl;
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            console.log(Mario.MarioCharacter.gameplayMetrics.PrintMetrics());

            this.agent.StoreActions(); // Store player actions

            context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Count Number os Losses
        }
    }

    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.NextLevel = true;
    }

    DrawUI(context) {
        this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
        this.DrawStringShadow(context, "00000000", 0, 1);
        this.DrawStringShadow(context, "COIN", 14, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
        this.DrawStringShadow(context, "WORLD", 24, 0);
        this.DrawStringShadow(context, " TBD", 24, 1);
        this.DrawStringShadow(context, "TIME", 34, 0);

        let time = this.TimeLeft | 0;
        if (time < 0) time = 0;

        this.DrawStringShadow(context, " " + time, 34, 1);
    }

    Update(delta) {
        this.agent.Update(delta);
        super.Update(delta);
    }
};