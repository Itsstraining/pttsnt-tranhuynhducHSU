// Add new functions, variables here
function rutGon(a, res) {
  if (a == 1) {
    console.log(res)
    return
  }

  let i = 2
  do {
    if (a % i == 0) {
      res += i + ' '
      a = a / i
      rutGon(a, res)
      return
    }
    i++
  } while (a > i)
  console.log(res + i)
}

function main(input) {
  if (input == 0) {
    console.log(0)
    return
  }
  rutGon(input, '')
}

module.exports = main;
