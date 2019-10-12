let n = 1
let scale = 100
const d = 49

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.angleMode(p.DEGREES)
  }

  p.mouseWheel = ({ delta }) => {
    if (delta === 1) {
      n += 2
      scale += 10
    } else {
      n -= 2
      scale -= 10
    }
  }

  p.windowResized = () => {
    initializeRose()
  }

  const initializeRose = () => {
    p.background(0)
    p.translate(window.innerWidth / 2, window.innerHeight / 2)
    p.stroke(255)

    p.noFill()
    p.beginShape()
    for (let i = 0; i < 360; i++) {
      const k = i * d
      const r = scale * p.sin(n * k)

      const x = r * p.cos(k)
      const y = r * p.sin(k)
      p.vertex(x, y)
    }
    p.endShape()
  }

  p.draw = () => {
    initializeRose()
  }
}

export default sketch
