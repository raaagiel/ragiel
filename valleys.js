function countingValleys(n, s) {
    var mountainSteps = 0
    var valleySteps = 0
    var currentLevel = 0
    var stepHistory = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            mountainSteps++
            currentLevel++
            stepHistory.push(currentLevel)
        } else if (s[i] === 'D') {
            valleySteps++
            currentLevel--
            stepHistory.push(currentLevel)
        }
    }
    var stepsAtSeaLevel = 0
    for (var i = 0; i < stepHistory.length; i++) {
        if (stepHistory[i] === 0 && stepHistory[i - 1] < 0) {
            stepsAtSeaLevel++
        }
    }
    return stepsAtSeaLevel
}
console.log(countingValleys(49, 'UFFDDFDUDFUFUUFFDDUFFDDUFFDDUDUDUDUDUDUUUUUUUUU'))
// console.log(countingValleys(4, 'UDFD'))