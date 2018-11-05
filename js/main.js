//グローバル展開
phina.globalize();

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 640;
const ASSETS = {
    "image": {
        "buro": "./assetus/image/buropiyo.png",
        "mero": "./assetus/image/meropiyo.png",
        "mika": "./assetus/image/mikapiyo.png",
        "nasu": "./assetus/image/nasupiyo.png",
        "take": "./assetus/image/takepiyo.png",
        "toma": "./assetus/image/tomapiyo.png",
    }
};

phina.define('MainScene',{
    superClass: 'DisplayScene',
    init: function () {
        this.superInit({
            width:SCREEN_WIDTH,
            height:SCREEN_HEIGHT,
        });
        this.gridX = Grid(SCREEN_WIDTH, 40);
        this.gridY = Grid(SCREEN_HEIGHT, 40);

        this.backgroundColor = 'black';

        const player = Sprite("toma", 64, 64).addChildTo(this);
        player.setFrameIndex(10, 64, 64);
        player.x = this.gridX.center();
        player.y = this.gridY.span(37);

    }
});

phina.main(() => {
    const app = GameApp({
        title: "インベーダー",
        fps: 60,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        assets: ASSETS,
    });
    
    app.run();
});