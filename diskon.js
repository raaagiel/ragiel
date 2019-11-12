const harga = (hargaasli, diskon) => {
    var total = 0
    total += hargaasli - (hargaasli * (diskon / 100))
    return total
}
console.log(harga(3000, 10))