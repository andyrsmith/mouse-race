import kaboom from "kaboom"
const SPEED = 55

kaboom({
    width: 800,
    height: 600
})

loadSprite("mouse", 'mouse-spritesheet-resize.png', {
        sliceX: 4,
        sliceY: 3,
        anims: {
            idle: {
                from: 0,
                to: 1
            }
        },
})

//const mouse = add([
//    sprite("mouse", {
//        anim: "idle",
//    }
//    )
//])
//loadSprite("mouse", 'mouse-spritesheet-resize.png')
const mouse = add([
    sprite("mouse"),
    pos(),
    area(),
    body({weight: 0}),

])
mouse.play("idle")

onKeyDown("left", () => {
    mouse.move(-SPEED, 0)
})
onKeyDown("right", () => {
    mouse.move(SPEED, 0)
})
onKeyDown("up", () => {
    mouse.move(0, -SPEED)
})
onKeyDown("down", () => {
    mouse.move(0, SPEED)
})
