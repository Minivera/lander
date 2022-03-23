import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/'],
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    globals: {
        'ts-jest': {
            useESM: true,
            tsconfig: './tsconfig.json',
        },
    },
    moduleDirectories: ['.', 'node_modules', 'src'],
    moduleNameMapper: {
        '@lander/lander(.*)$': '<rootDir>/node_modules/@lander/lander/src/$1'
    },
    testEnvironment: 'jsdom',
};

export default config;
