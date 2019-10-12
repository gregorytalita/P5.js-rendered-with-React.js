import React, { useEffect, useState } from 'react'
import p5 from 'p5'

const P5Wrapper = ({ sketch, ...rest }) => {
  const [canvas, handleCanvas] = useState()
  const [wrapper, handleWrapper] = useState()

  useEffect(() => {
    handleCanvas(new p5(sketch, wrapper))
    return () => {
      canvas.remove()
    }
  }, [sketch])

  return <div ref={handleWrapper} {...rest} />
}

export default P5Wrapper
