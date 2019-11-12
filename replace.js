const ganti = (input) => {
    var kata = input.replace('.com', '').replace('https://', '').replace('http://').replace('www.', '').split('/')
    return kata[0]
}
console.log(ganti('https://www.w3schools.com/jsref/jsref_replace.asp'))
// https://www.w3schools.com/jsref/jsref_replace.asp