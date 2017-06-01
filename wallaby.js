module.exports = function (wallaby) {
    return {
        files: [
            { pattern: './node_modules/**/*.*', instrument: false, load: false, ignore: true },
            { pattern: './**/*.spec.+(ts|tsx)', instrument: false, load: false, ignore: true },
            { pattern: './**/*.test.+(ts|tsx)', instrument: false, load: false, ignore: true },

            { pattern: './files/**/*.*', instrument: false, load: false, ignore: false, binary: true },
            { pattern: './**/*.snap', instrument: false, load: false, ignore: false },
            { pattern: './**/*.+(ts|tsx)', instrument: true, load: false, ignore: false },
            "package.json",
            "tsconfig.json"
        ],
        tests: [
            '/**/*.spec.+(ts|tsx)',
        ],
        env: {
            type: 'node',
            runner: 'node',
        },
        testFramework: 'jest',
        debug: true
    }
};
