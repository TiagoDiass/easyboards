import * as S from './HelpModal.styles';
import Modal, { ModalProps } from 'components/Modal/Modal';

type HelpModalProps = Pick<ModalProps, 'isOpen' | 'onClose'>;

export default function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='medium' title='Help'>
      <Modal.Content style={{ padding: '1rem 1.5rem' }}>
        <S.Heading>About this app.</S.Heading>

        <S.Text>
          This is an app where you can <strong>easily</strong> manage your tasks by creating specific
          boards to specific contexts, separating them into columns and task cards.
        </S.Text>

        <S.Text>
          This project has been developed with the aim of studying and praciting web development,
          interfaces building and styling. You can find the link to the source code and to the
          developer profile in the end of this help text.
        </S.Text>

        <S.Heading>Basic instructions of how to use it</S.Heading>

        <S.Text>
          To understand how to use the app, you first need to understand the three main things that
          you will be using here. These three things are: <br /> <br />
          <strong>Task card</strong> - A card that contains some text to describe a task <br />
          <strong>Column</strong> - You can use a column to group tasks by some specific reason
          <br />
          <strong>Board</strong> - A board is a group of columns and tasks, used to group all tasks
          of a specific context <br />
        </S.Text>

        <S.Text>
          After understanding that, we can move on to the features that you will be using.
          Basically, you will have the following features with this app:
        </S.Text>

        <S.List>
          <li>Drag and drop tasks into columns</li>
          <li>Reorder the columns by dragging and dropping them</li>
          <li>Create tasks</li>
          <li>Delete tasks</li>
          <li>Create columns</li>
          <li>Delete columns</li>
          <li>Edit a column name</li>
          <li>Change the application's theme from light to dark mode</li>
          <li>
            Create multiple boards (starting from a blank board or a board with a kanban template)
          </li>
          <li>Change a board name</li>
          <li>Delete a board</li>
        </S.List>

        <S.Heading>Developer and Source Code</S.Heading>

        <S.Text>
          This project has been developed by <strong>Tiago da Costa Dias</strong>. <br />
          <br />
          <a href='https://www.linkedin.com/in/TiagoDiass' target='_blank' rel="noreferrer">
            Click here to see his LinkedIn.
          </a>
          <br />
          <a href='https://github.com/TiagoDiass' target='_blank' rel="noreferrer">
            Click here to see his Github.
          </a>
          <br />
          <a href='https://github.com/TiagoDiass/easyboards' target='_blank' rel="noreferrer">
            Click here to see the source code of this app.
          </a>
        </S.Text>

        <S.Text>If you need to report a bug, send a message using one the links above.</S.Text>

        <S.Heading>Bye 👋</S.Heading>
      </Modal.Content>
    </Modal>
  );
}
