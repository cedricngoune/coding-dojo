module.exports = {
    roots: [
        "<rootDir>/."
    ],
    testRegex:'(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}