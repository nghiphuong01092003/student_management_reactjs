import { createContext } from 'react';

export type GlobalContent = {
    copy: string
}
export const MyGlobalContext = createContext<GlobalContent>({
    copy: 'Hello World'
})
export default MyGlobalContext;