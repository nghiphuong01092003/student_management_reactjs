import { useContext } from 'react';
import { MyGlobalContext } from './GlobalContext'

const UseContext = () => {
    const copy = useContext(MyGlobalContext);
    return (
        <div>
            <h1>{copy.copy}</h1>
        </div>
    );
};

export default UseContext;