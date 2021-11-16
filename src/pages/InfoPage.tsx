import React from "react";
import { useNavigate } from 'react-router-dom';

export const InfoPage: React.FC = () => {
    const history = useNavigate()
    return <>
        <h1>Info page</h1>
        <h4>Edu React+TS - todo list</h4>

        <button className="btn" onClick={() => history('/')}>Back to list</button>
    </>
}