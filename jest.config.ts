import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.(ts|tsx|js)', '<rootDir>/src/**/*.test.(ts|tsx)'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
};

export default config;
