import React, { useContext, useReducer, useEffect } from "react"
import { reducer } from "./reducer"
import { useFetch } from "./Hooks/useFetch"

const AppContext = React.createContext()

const AppContextProvider = ({ children }) => {
  const dataResponse = useFetch("https://course-api.com/react-useReducer-cart-project")
  const [state, dispatch] = useReducer(reducer, dataResponse)

  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE", payload: id })
  }
  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE", payload: id })
  }
  const clearItems = () => {
    dispatch({ type: "CLEAR_ITEMS" })
  }
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  useEffect(() => {
    if (dataResponse.data) {
      dispatch({ type: "DATA_UPDATE", payload: dataResponse })
    }
  }, [dataResponse])

  return (
    <AppContext.Provider
      value={{ ...state, decreaseAmount, clearItems, increaseAmount, removeItem }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppContextProvider }
