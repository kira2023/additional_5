module.exports = function check(str, bracketsConfig) {
    let bracketsPairList = bracketsConfig.map((elem) => elem[0] + elem[1]);
    let foundedFlag = true;

    while (foundedFlag) {
        foundedFlag = false;

        bracketsPairList.forEach((elem) => {
            while (str.indexOf(elem) !== -1) {
                str = str.replace(elem, '');
                foundedFlag = true;
            }
        });
    }

    return !str;
}
