import { createContext, useState } from "react";

export const Context = createContext()

export function ContextProvider({ children }) {
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)

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
