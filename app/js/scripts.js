let font
let grafico

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup() {
    createCanvas(1200, 600)

    grafico = createGraphics(1200,600)

    grafico.fill("#ff0000")
    grafico.textSize(300)
    grafico.textAlign(CENTER, CENTER)
    grafico.textLeading(200)
    grafico.textFont(font)
    grafico.text("Good\nmorning", 600, 300)
}

function draw(){
    background("#ebe2d8")

    image(grafico, 0, 0, 1200, 600)
} 