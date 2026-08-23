import React, { createContext, useContext, useState } from 'react';

interface EditableContextType {
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
}

const EditableContext = createContext<EditableContextType>({
  isEditing: false,
  setIsEditing: () => {},
});

export const useEditable = () => useContext(EditableContext);

export const EditableProvider = ({ children, forceEditMode = false }: { children: React.ReactNode, forceEditMode?: boolean }) => {
  const [isEditing, setIsEditing] = useState(forceEditMode);

  return (
    <EditableContext.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </EditableContext.Provider>
  );
};
