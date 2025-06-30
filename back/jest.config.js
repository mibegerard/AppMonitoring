module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '.',
    moduleFileExtensions: ['ts', 'js', 'json'],
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^generated/(.*)$': '<rootDir>/generated/$1',
    },
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
