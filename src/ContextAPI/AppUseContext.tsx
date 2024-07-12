import MyGlobalContext from './GlobalContext';
import UseContext from './UseContext';

export const AppUseContext = () => {
    return (
        <MyGlobalContext.Provider value={{ copy: "22222" }}>
            <UseContext />
        </MyGlobalContext.Provider>
    );
}

export default AppUseContext;