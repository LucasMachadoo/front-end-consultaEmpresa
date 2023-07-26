export const getRandosFromArray = function (array: any, numRandos: any) {
  var shuffled = shuffle(array)
  var randos = shuffled.slice(0, numRandos)
  return randos
}

const shuffle = function (array: any) {
  var m = array.length,
    t,
    i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function makeTitle(slug: string) {
  var words: any = slug.split("-")

  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    words[i] = word.toUpperCase()
  }

  return words.join(" ")
}

export function formatTitle(slug: string) {
  var words: any = slug.split("-")

  for (var i = 0; i < words.length; i++) {
    var word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }

  return words.join(" ")
}

export function titleCase(str: string) {
  if (str === null) return ""

  var splitStr: string[] = str.toLowerCase().split(" ")
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i]!.charAt(0).toUpperCase() + splitStr[i]!.substring(1)
  }
  // Directly return the joined string
  return splitStr.join(" ")
}
