import React from 'react';
import Button from '../Button';

interface IUndoComponentProps {
  content: string;
  onUndo: () => void;
}

const UndoComponent: React.FC<IUndoComponentProps> =
  props => {
    return (
      <div>
        <p>{props.content}</p>
        <Button onClick={props.onUndo}>Undo</Button>
      </div>
    );
  };

export default UndoComponent;
