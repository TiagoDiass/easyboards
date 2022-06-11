import { renderHook, RenderResult, act } from '@testing-library/react-hooks';
import useModalState, { UseModalStateResult } from './useModalState';

describe('Hook: useModalState', () => {
  let result: RenderResult<UseModalStateResult>;
  const isOpenStateIndex = 0;
  const openModalActionIndex = 1;
  const closeModalActionIndex = 2;

  beforeEach(() => {
    result = renderHook(() => useModalState()).result;
  });

  it('should start with the isOpen state equal to false', () => {
    expect(result.current[isOpenStateIndex]).toBe(false);
  });

  it('should set the isOpen state to true when the the openModal action is called', () => {
    expect(result.current[isOpenStateIndex]).toBe(false);

    act(() => {
      result.current[openModalActionIndex]();
    });

    expect(result.current[isOpenStateIndex]).toBe(true);
  });

  it('should set the isOpen state to false when the the closeModal action is called', () => {
    expect(result.current[isOpenStateIndex]).toBe(false);

    act(() => {
      result.current[openModalActionIndex]();
    });

    expect(result.current[isOpenStateIndex]).toBe(true);

    act(() => {
      result.current[closeModalActionIndex]();
    });

    expect(result.current[isOpenStateIndex]).toBe(false);
  });
});
