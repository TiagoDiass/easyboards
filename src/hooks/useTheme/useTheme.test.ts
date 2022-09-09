import { act, renderHook } from '@testing-library/react-hooks';
import useTheme from './useTheme';
import 'jest-localstorage-mock';
import { waitFor } from '@testing-library/react';
import { CURRENT_THEME_KEY } from 'constants/local-storage-keys';

describe('Hook: useTheme', () => {
  it('should get the current theme from local storage', () => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue('dark');

    const result = renderHook(() => useTheme()).result;

    expect(result.current.currentTheme).toBe('dark');
  });

  it('should use the light theme as default', () => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue(null);

    const result = renderHook(() => useTheme()).result;

    expect(result.current.currentTheme).toBe('light');
  });

  it('should toggle theme correctly', async () => {
    jest.spyOn(localStorage, 'getItem').mockReturnValue('dark');

    const result = renderHook(() => useTheme()).result;

    act(() => {
      result.current.toggleTheme();
    });

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(CURRENT_THEME_KEY, 'light');
    });

    act(() => {
      result.current.toggleTheme();
    });

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(CURRENT_THEME_KEY, 'dark');
    });
  });
});
