import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
export default config;
