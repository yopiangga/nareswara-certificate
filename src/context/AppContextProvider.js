import React from "react";

import { CombineComponents } from "./CombineComponents";
// import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

const providers = [UserProvider];
export const AppContextProvider = CombineComponents(...providers);
