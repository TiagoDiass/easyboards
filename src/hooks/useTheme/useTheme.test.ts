import { act, renderHook } from '@testing-library/react-hooks';
import useTheme from './useTheme';
import { waitFor } from '@testing-library/react';

describe('Hook: useTheme', () => {
  it('should use the light theme as default', () => {
    const result = renderHook(() => useTheme()).result;

    expect(result.current.currentTheme).toBe('light');
  });

  it('should toggle theme correctly', async () => {
    const result = renderHook(() => useTheme()).result;

    act(() => {
      result.current.toggleTheme();
    });

    await waitFor(() => {
      expect(result.current.currentTheme).toBe('dark');
    });

    act(() => {
      result.current.toggleTheme();
    });

    await waitFor(() => {
      expect(result.current.currentTheme).toBe('light');
    });
  });
});
