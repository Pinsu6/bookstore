import { createContext, useContext, useState } from "react";

export const EditContext = createContext()


export default function EditProvider({ children }) {
  const [edit1, setEdit] = useState();
  return (
    <EditContext.Provider value={[edit1, setEdit]}>
      {children}
    </EditContext.Provider>
  );
}

export const useEdit=()=>useContext(EditContext)
