const vowelconsonant = (kata) => {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var output = 0
    for (var i = 0; i < kata.length; i++) {
        if (kata[i] == 'a' || kata[i] == 'i' || kata[i] == 'u' || kata[i] == 'e' || kata[i] == 'o') {
            output++
        } else {
            var urutan = abjad.indexOf(kata[i]) + 1
            output += urutan
        }
    }
    return output
}
console.log(vowelconsonant('azi'))