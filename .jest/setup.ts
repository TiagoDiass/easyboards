import '@testing-library/jest-dom';
import 'jest-styled-components';

beforeAll(() => {
  global.structuredClone = (value: any) => JSON.parse(JSON.stringify(value));
});
