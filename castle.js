function blanks () {
    builder.shift(0, 2, 0)
    builder.place(AIR)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.shift(0, -4, 0)
    builder.place(AIR)
    builder.shift(0, -1, 0)
    builder.place(AIR)
    builder.shift(0, -1, 0)
    builder.place(AIR)
    builder.face(EAST)
    builder.shift(1, -1, 0)
    builder.mark()
    builder.shift(7, 0, 0)
    builder.fill(PLANKS_ACACIA)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 2)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(FORWARD, 5)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 5)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
    builder.move(FORWARD, 10)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(FORWARD, 5)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
    builder.move(FORWARD, 13)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(FORWARD, 5)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 5)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
    builder.move(FORWARD, 13)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(FORWARD, 2)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 5)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
    builder.turn(RIGHT_TURN)
    builder.move(FORWARD, 1)
    builder.move(DOWN, 1)
    builder.turn(LEFT_TURN)
    builder.mark()
    builder.move(FORWARD, 14)
    builder.tracePath(PLANKS_ACACIA)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 18)
    builder.tracePath(PLANKS_ACACIA)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 18)
    builder.tracePath(PLANKS_ACACIA)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 18)
    builder.tracePath(PLANKS_ACACIA)
    builder.turn(RIGHT_TURN)
    builder.mark()
    builder.move(FORWARD, 5)
    builder.tracePath(PLANKS_ACACIA)
}
function wallWindow2 () {
    builder.teleportToOrigin()
    builder.face(EAST)
    builder.shift(7, 0, 1)
    builder.face(NORTH)
    for (let index = 0; index < 8; index++) {
        builder.place(STONE)
    }
    builder.move(UP, 1)
    for (let index = 0; index < 2; index++) {
        builder.place(STONE)
        builder.move(FORWARD, 1)
    }
    for (let index = 0; index < 2; index++) {
        builder.place(GLASS)
        builder.move(FORWARD, 1)
    }
    for (let index = 0; index < 3; index++) {
        builder.place(STONE)
        builder.move(FORWARD, 1)
    }
}
function mainTower () {
    builder.face(WEST)
    builder.move(FORWARD, 9)
    builder.face(NORTH)
    builder.move(FORWARD, 12)
    builder.move(DOWN, 3)
    builder.mark()
    tower(6, 12, 0)
}
function gate2 () {
    builder.face(EAST)
    builder.move(FORWARD, 6)
    builder.face(NORTH)
    builder.move(FORWARD, 2)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
}
function towerWindow2 () {
    builder.face(EAST)
    builder.move(FORWARD, 6)
    builder.mark()
    builder.shift(0, 3, 0)
    builder.tracePath(GLASS)
}
function wall (forward: number, left: number, height: number) {
    builder.mark()
    builder.shift(forward, 0, left)
    builder.raiseWall(POLISHED_ANDESITE, height)
}
function wallWindow () {
    builder.teleportToOrigin()
    builder.face(WEST)
    for (let index = 0; index < 8; index++) {
        builder.place(STONE)
    }
    builder.move(UP, 1)
    builder.turn(LEFT_TURN)
    builder.turn(LEFT_TURN)
    for (let index = 0; index < 3; index++) {
        builder.place(STONE)
        builder.move(FORWARD, 1)
    }
    for (let index = 0; index < 2; index++) {
        builder.place(GLASS)
        builder.move(FORWARD, 1)
    }
    for (let index = 0; index < 3; index++) {
        builder.place(STONE)
        builder.move(FORWARD, 1)
    }
}
function wallWindow3 () {
    builder.face(SOUTH)
    builder.shift(4, 2, 0)
    for (let index = 0; index < 2; index++) {
        builder.place(GLASS)
        builder.move(FORWARD, 1)
    }
    for (let index = 0; index < 2; index++) {
        builder.move(FORWARD, 1)
    }
    builder.face(WEST)
    builder.move(FORWARD, 3)
    for (let index = 0; index < 2; index++) {
        builder.place(GLASS)
        builder.move(FORWARD, 1)
    }
}
function wallWithWindow (forward: number, left: number, height: number) {
    builder.mark()
    builder.shift(forward, 0, left)
    builder.raiseWall(POLISHED_ANDESITE, height)
}
function tower (side: number, height: number, turns: number) {
    builder.pushState()
    for (let index = 0; index < turns; index++) {
        builder.turn(LEFT_TURN)
    }
    builder.shift(2 - side, 0, 2 - side)
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, side)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(POLISHED_ANDESITE, height)
    builder.popState()
}
function castle (wallheight: number, wallLength: number, towerLength: number, towerHeight: number) {
    tower(towerLength, towerHeight, 2)
    wall(wallLength, 0, wallheight)
    tower(towerLength, towerHeight, 0)
    wall(0, wallLength, wallheight)
    tower(towerLength, towerHeight, 0)
    wall(0 - wallLength, 0, wallheight)
    tower(towerLength, towerHeight, 0)
    wall(0, 0 - wallLength, wallheight)
}
function towerWindow () {
    builder.face(EAST)
    builder.shift(13, 10, 1)
    builder.face(SOUTH)
    builder.shift(2, 0, 0)
    builder.mark()
    builder.shift(0, -3, 0)
    builder.tracePath(GLASS)
}
function gate () {
    builder.face(WEST)
    builder.move(FORWARD, 8)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.face(SOUTH)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(UP, 1)
    builder.place(AIR)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.place(AIR)
}
function most () {
    builder.turn(LEFT_TURN)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 17)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.fill(NOTE_BLOCK)
}
function floor () {
    builder.face(EAST)
    builder.move(FORWARD, 1)
    builder.move(UP, 2)
    builder.place(STONE)
    builder.face(NORTH)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(EAST)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(SOUTH)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(WEST)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(NORTH)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(EAST)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(NORTH)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(WEST)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.place(STONE)
    builder.face(EAST)
    builder.move(FORWARD, 3)
    builder.face(SOUTH)
    builder.move(FORWARD, 1)
    builder.face(WEST)
    builder.move(FORWARD, 1)
    builder.place(AIR)
    builder.move(DOWN, 1)
    builder.face(WEST)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.move(DOWN, 1)
    builder.place(STONE)
    builder.move(FORWARD, 1)
    builder.move(DOWN, 1)
    builder.place(STONE)
}
function fosa () {
    builder.move(FORWARD, 15)
    builder.move(DOWN, 1)
    builder.place(WATER)
    builder.face(SOUTH)
    builder.mark()
    builder.move(FORWARD, 20)
    builder.fill(WATER)
    builder.face(EAST)
    builder.mark()
    builder.move(FORWARD, 36)
    builder.fill(WATER)
    builder.mark()
    builder.face(NORTH)
    builder.move(FORWARD, 36)
    builder.fill(WATER)
    builder.face(WEST)
    builder.mark()
    builder.move(FORWARD, 36)
    builder.fill(WATER)
    builder.face(SOUTH)
    builder.mark()
    builder.move(FORWARD, 36)
    builder.fill(WATER)
}
player.teleport(pos(100, 0, 100))
builder.setOrigin()
builder.teleportTo(pos(5, 0, 0))
for (let index = 0; index < 4; index++) {
    castle(5, 20, 7, 7)
}
wallWindow()
wallWindow2()
wallWindow3()
mainTower()
gate()
gate2()
floor()
fosa()
most()
towerWindow()
towerWindow2()
blanks()
