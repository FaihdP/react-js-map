import { createContext, useState } from "react";

export const Context = createContext()

export function ContextProvider({ children }) {
  const [from, setFrom] = useState([])
  const [to, setTo] = useState([])

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
