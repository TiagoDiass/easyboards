import { useState } from 'react';

type OpenModalAction = () => void;
type CloseModalAction = () => void;

export type UseModalStateResult = [
  isModalOpen: boolean,
  openModal: OpenModalAction,
  closeModal: CloseModalAction
];

/**
 * Hook to wrap the logic of creating a boolean state and setting it to the Modal component
 * @returns {Array} Array with the state, a setter to set the state to true and another one to set it to false
 */
const useModalState = (): UseModalStateResult => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return [isModalOpen, openModal, closeModal];
};

export default useModalState;
