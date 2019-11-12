const getMiddle = (kata) => {
    var posisi
    var length
    if (kata.length % 2 == 1) {
        posisi = kata.length / 2
        length = 1
    } else {
        posisi = kata.length / 2 - 1
        length = 2
    }
    return kata.substring(posisi, posisi + length)
}
console.log(getMiddle("kereta"))