const checkpass = (str) => {
    var hilangSpasi = str.replace(' ', '')
    if (hilangSpasi.length > 5) {
        var arr = hilangSpasi.split('')
        var angka = false
        var huruf = false
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                angka = true
            } else {
                huruf = true
            }
        }
        if (angka == true && huruf == true) {
            return 'password berhasil'
        } else if (angka == false && huruf == true) {
            return 'password harus kombinasi'
        } else {
            return 'password harus 6 karakter'
        }
    } else {
        return 'password harus kombinasi 6 karakter'
    }
}
console.log(checkpass('1234567'))

