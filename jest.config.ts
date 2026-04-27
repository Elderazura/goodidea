import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^swiper$': '<rootDir>/__mocks__/swiper.js',
    '^swiper/modules$': '<rootDir>/__mocks__/swiper-modules.js',
    '^swiper/css$': '<rootDir>/__mocks__/swiper-css.js',
    '^swiper/css/pagination$': '<rootDir>/__mocks__/swiper-css.js',
    '^swiper/css/navigation$': '<rootDir>/__mocks__/swiper-css.js',
    '^swiper/css/effect-fade$': '<rootDir>/__mocks__/swiper-css.js',
  },
}

export default createJestConfig(config)
