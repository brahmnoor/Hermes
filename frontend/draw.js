const width = 600;
const height = 340;

function drawBackground (stage, imageUrl) {
    const background = PIXI.Sprite.fromImage(imageUrl);
    background.width = 600;
    background.height = 340;
    stage.addChild(background);
}

function drawRectanges (stage, rectanges) {
    rectanges.forEach(rectange => {
        var line = new PIXI.Graphics()
        line.lineStyle(1, 0xffffff)
        line.moveTo(rectange.vertices[0].x*width, rectange.vertices[0].y*height)
        for (let i = 0; i < rectange.vertices.length; i++) {
            const pt = rectange.vertices[(i + 1) % rectange.vertices.length]
            line.lineTo(pt.x*width, pt.y*height)
        }
        stage.addChild(line)
        })
}