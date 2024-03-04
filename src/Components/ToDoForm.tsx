import React, { useRef } from 'react';

interface ToDoFormProps {
    onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    };

    return (
        <div className="input-filed mt2">
            <input
                type="text"
                id="title"
                placeholder="Enter new quest"
                ref={ref}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Enter new quest
            </label>
        </div>
    );
};
