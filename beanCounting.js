var countChar = function (string, charToCount) {
        var charCount = 0,
            currentChar;
        for (currentChar = 0; currentChar < string.length; currentChar++) {
            if (string.charAt(currentChar) === charToCount) {
                charCount++;
            };
        };
        return charCount;
    },
    countBs = function (string) {
        return countChar(string, "B");
    };


