module.exports =  {
    bail: false,
    verbose: false,
    collectCoverage: false,
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 95,
            functions: 100,
            lines: 100
        }
    }
};
