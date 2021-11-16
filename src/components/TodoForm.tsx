// import React, { useRef, useState } from "react";

import React, { useRef } from "react";

interface TodoFromProps {
    onAdd(title: string): void;
}

export const TodoFrom: React.FC<TodoFromProps> = (props) => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);
    // const changeHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    
    const keyPressHendler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
            // setTitle('');
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // onChange={changeHendler} 
                // value={title} 
                onKeyPress={keyPressHendler}
                ref={ref}
                type="text" 
                id="title" 
                placeholder="Enter new task"/>
            <label htmlFor="title" className="active">Enter a new task</label>
        </div>
    );
}    