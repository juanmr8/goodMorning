let font
let grafico

const waveInput = document.querySelector('input.wave');
const distortionXInput = document.querySelector('input.distortionX');
const distortionYInput = document.querySelector('input.distortionY');
const line1Input = document.querySelector('input.line1');
const line2Input = document.querySelector('input.line2');

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup() {
    createCanvas(1200, 600)


    createCopy()
}

function draw(){
    background("#ebe2d8")

    const tileSize = 10

    for (let x = 0; x < 120; x = x + 1) {
        for(let y = 0; y < 60; y = y + 1) {

            const wave = waveInput.value

            const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.1) * distortionXInput.value
            const distortionY = sin(frameCount * wave + x * 0.5 + y * 1) * distortionYInput.value

            const sx = x * tileSize + distortionX
            const sy = y * tileSize + distortionY
            const sw = tileSize
            const sh = tileSize

            const dx = x * tileSize
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            image(grafico, dx, dy, dw, dh, sx, sy, sw, sh)

        }
    }

} 

function createCopy () {
    
    grafico = createGraphics(1200,600)

    const text = line1Input.value + "\n" + line2Input.value

    grafico.fill("#ff0000")
    grafico.textSize(200)
    grafico.textAlign(CENTER, CENTER)
    grafico.textLeading(200)
    grafico.textFont(font)
    grafico.text(text, 600, 300)
}

line1Input.addEventListener("input", function (){
    createCopy()
}) 
line2Input.addEventListener("input", function (){
    createCopy()
}) 