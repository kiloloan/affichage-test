function afficheLog (texte: string) {
    basic.showIcon(IconNames.Chessboard)
    LCD1IN8.DrawRectangle(
    0,
    115,
    160,
    128,
    LCD1IN8.Get_Color(LCD_COLOR.GREEN),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DisString(
    1,
    116,
    texte,
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    LCD1IN8.LCD_DisplayWindows(
    0,
    115,
    160,
    128
    )
}
function fond_ecran () {
    afficheLog("affiche ligne")
    basic.showIcon(IconNames.StickFigure)
    for (let AxeX = 0; AxeX <= 160; AxeX++) {
        LCD1IN8.DrawLine(
        AxeX,
        1,
        160 - AxeX,
        128,
        Math.round(65535 / AxeX),
        DOT_PIXEL.DOT_PIXEL_1,
        LINE_STYLE.LINE_SOLID
        )
    }
    LCD1IN8.LCD_Display()
    afficheLog("affiche rectangle")
    basic.showIcon(IconNames.StickFigure)
    for (let AxeY = 0; AxeY <= 64; AxeY++) {
        LCD1IN8.DrawRectangle(
        AxeY,
        AxeY,
        AxeY * 2,
        AxeY * 2,
        Math.round(1024 * AxeY),
        DRAW_FILL.DRAW_EMPTY,
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
    LCD1IN8.LCD_Display()
    afficheLog("affiche cercle")
    basic.showIcon(IconNames.StickFigure)
    for (let radius = 0; radius <= 32; radius++) {
        let AxeY = 0
        LCD1IN8.DrawCircle(
        96,
        64,
        2 * radius,
        32768 + Math.round(1024 * AxeY),
        DRAW_FILL.DRAW_EMPTY,
        DOT_PIXEL.DOT_PIXEL_1
        )
    }
    LCD1IN8.LCD_Display()
    basic.showIcon(IconNames.Yes)
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # # . .
        . # # # .
        . # # . .
        . # . . .
        `)
    if (posX < 160) {
        posX += 5
    } else {
        posX = 1
    }
    AfficheCurseur()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallSquare)
    afficheLog("X" + posX + "|Y" + poxY)
    LCD1IN8.DrawCircle(
    posX,
    poxY,
    32,
    color,
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    if (poxY < 128) {
        poxY += 5
    } else {
        poxY = 1
    }
    AfficheCurseur()
})
function AfficheCurseur () {
    LCD1IN8.DrawPoint(
    posX,
    poxY,
    color,
    DOT_PIXEL.DOT_PIXEL_2
    )
    LCD1IN8.LCD_DisplayWindows(
    posX - 2,
    poxY - 2,
    posX + 2,
    poxY + 2
    )
}
let color = 0
let poxY = 0
let posX = 0
basic.showIcon(IconNames.Happy)
posX = 1
poxY = 1
color = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_Display()
afficheLog("initialisation")
basic.showIcon(IconNames.Yes)
fond_ecran()
basic.showIcon(IconNames.No)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    if (color <= 65536) {
        color += 1
    } else {
        color = 0
    }
})
