import { createContext, useState } from "react";

export const Context = createContext()

export function ContextProvider({ children }) {
  const [from, setFrom] = useState([0, 0])
  const [to, setTo] = useState([0, 0])

  return (
    <Context.Provider
      value={{
        from,
        setFrom,
        to,
        setTo
      }}
    >
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes;