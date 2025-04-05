import { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);