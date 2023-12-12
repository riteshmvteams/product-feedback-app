import { createContext, useContext, useReducer } from "react";
import { initialState, productReducer } from "./productReucer";

const ProductFeedbackContext = createContext(null);

const ProductFeedbackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductFeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductFeedbackContext.Provider>
  );
};

export const useProductFeeback = () => {
  return useContext(ProductFeedbackContext);
};

export default ProductFeedbackProvider;
