import { Dispatch, SetStateAction, createContext } from 'react';


interface MyContextProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextProps| undefined>({
  isDark: false,
  setIsDark: () => {},
});

export default MyContext;
