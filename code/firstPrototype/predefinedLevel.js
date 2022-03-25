class PredefinedLevel extends Level {
    constructor(width, height, type) {
        super(width, height, type);

        this.coinID = 0;
        this.powerupID = 0;

        this.coins = [];
        this.powerups = [];
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

    GetCoinID(x, y) {
        for (let i = 0; i < this.coins.length; i++) {
            if (this.coins[i].X === x && this.coins[i].Y === y) return this.coins[i].ID;
        }

        return null;
    }
}