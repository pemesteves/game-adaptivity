class PredefinedLevel extends Level {
    constructor(width, height, type) {
        super(width, height, type);

        this.coinID = 0;
        this.powerupID = 0;
        this.enemyID = 0;

        this.coins = [];
        this.powerups = [];
        this.enemies = [];
    }

    SetBlock(x, y, block) {
        super.SetBlock(x, y, block);

        const b = Tile.Behaviors[block & 0xff];

        if ((b & Tile.PickUpable) > 0 || ((b & Tile.Bumpable) > 0 && (b & Tile.Special) <= 0)) { // Coin
            this.coins.push({
                "ID": ++this.coinID,
                "X": x,
                "Y": y
            });
        }
        else if ((b & Tile.Special) > 0) { // Powerup
            this.powerups.push({
                "ID": ++this.powerupID,
                "X": x,
                "Y": y
            });
        }
    }

    SetSpriteTemplate(x, y, template) {
        if (this.IsOutsideBoundaries(x, y)) return;

        super.SetSpriteTemplate(x, y, template);
        this.enemies.push({
            "ID": ++this.enemyID,
            "Template": template
        });
    }

    GetCoinID(x, y) {
        for (let i = 0; i < this.coins.length; i++) {
            if (this.coins[i].X === x && this.coins[i].Y === y) return this.coins[i].ID;
        }

        return null;
    }

    GetPowerupID(x, y) {
        for (let i = 0; i < this.powerups.length; i++) {
            if (this.powerups[i].X === x && this.powerups[i].Y === y) return this.powerups[i].ID;
        }

        return null;
    }

    GetEnemyID(template) {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].Template === template) return this.enemies[i].ID;
        }

        return null;
    }
}