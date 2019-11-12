const ganjilgenap = (plat, tanggal) => {
    var nomor = plat.split(' ')
    var output = ''
    if (nomor[1] % 2 == 0 && tanggal % 2 == 0) {
        output += 'Anda boleh lewat'
        //genap
    }
    else {
        output += 'Anda tidak boleh lewat'
        //ganjil
    }
    return output
}
console.log(ganjilgenap('AB 4356 DD', 14))