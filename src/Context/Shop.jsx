import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
export const Shop = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return <Shop.Provider value={contextValue}>{props.children}</Shop.Provider>;
};

export default ShopContextProvider;
