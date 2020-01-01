export const convertToRGB = color => {
  if (color.substring(0, 1) === '#') {
    color = color.substring(1)
  }

  var rgbColor = {}

  rgbColor.red = parseInt(color.substring(0, 2), 16)
  rgbColor.green = parseInt(color.substring(2, 4), 16)
  rgbColor.blue = parseInt(color.substring(4), 16)

  return rgbColor
}

const rgbToHex = rgb => {
  let hex = Number(rgb).toString(16)
  if (hex.length < 2) {
    hex = '0' + hex
  }

  return hex
}

export const convertToHex = (r, g, b) => {
  const red = rgbToHex(r)
  const green = rgbToHex(g)
  const blue = rgbToHex(b)

  return '#' + red + green + blue
}
