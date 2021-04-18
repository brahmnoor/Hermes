function drawBackground (stage, imageUrl) {
    const background = PIXI.Sprite.fromImage(imageUrl);
    background.width = 600;
    background.height = 340;
    stage.addChild(background);
}