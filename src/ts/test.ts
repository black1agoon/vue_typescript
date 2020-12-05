interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {color: 'white', area: 100}
  if (config.clor) {
    // Error: 属性 'clor' 不存在于类型 'SquareConfig' 中
    newSquare.color = config.clor
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})
