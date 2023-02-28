const hueSlider = document.getElementById('hue')
let hValue = document.getElementById('hueValue')
const whiteSlider = document.getElementById('white')
let wValue = document.getElementById('whiteValue')
const blackSlider = document.getElementById('black')
let bValue = document.getElementById('blackValue')
const slider = document.getElementsByClassName('slider')

// background
function updateColor() {
  let color =
    'hwb(' +
    hueSlider.value +
    ' ' +
    whiteSlider.value +
    '% ' +
    blackSlider.value +
    '%)'
  document.body.style.background = color
}

function updateValiu() {
  let colorValiu = document.getElementById('result')
  colorValiu.innerHTML =
    '(' +
    hValue.innerHTML +
    ' ' +
    wValue.innerHTML +
    '% ' +
    bValue.innerHTML +
    '%)'
}

// hue
hValue.innerHTML = hueSlider.value

hueSlider.oninput = function () {
  hValue.innerHTML = this.value
}

hueSlider.addEventListener('mousemove', function () {
  let h = hueSlider.value / 3.6
  let color =
    'hwb(' +
    hueSlider.value +
    ' ' +
    whiteSlider.value +
    '% ' +
    blackSlider.value +
    '% /0.85)'

  hColor =
    'linear-gradient(90deg, ' +
    color +
    h +
    '%, hwb(185 80% 20% / 0.0)' +
    h +
    '%)'
  hueSlider.style.background = hColor

  updateColor()
  updateValiu()
})

// Whiteness
wValue.innerHTML = whiteSlider.value

whiteSlider.oninput = function () {
  wValue.innerHTML = this.value
}

whiteSlider.addEventListener('mousemove', function () {
  let w = whiteSlider.value
  let color =
    'hwb(' +
    hueSlider.value +
    ' ' +
    whiteSlider.value +
    '% ' +
    blackSlider.value +
    '% /0.85)'

  wColor =
    'linear-gradient(90deg, ' +
    color +
    w +
    '%, hwb(185 80% 20% / 0.0)' +
    w +
    '%)'
  whiteSlider.style.background = wColor
  updateColor()
  updateValiu()
})

// Blackness
bValue.innerHTML = blackSlider.value

blackSlider.oninput = function () {
  bValue.innerHTML = this.value
}

blackSlider.addEventListener('mousemove', function () {
  let b = blackSlider.value
  let color =
    'hwb(' +
    hueSlider.value +
    ' ' +
    whiteSlider.value +
    '% ' +
    blackSlider.value +
    '% /0.85)'
  bColor =
    'linear-gradient(90deg, ' +
    color +
    b +
    '%, hwb(185 80% 20% / 0.0)' +
    b +
    '%)'
  blackSlider.style.background = bColor
  updateColor()
  updateValiu()
})
