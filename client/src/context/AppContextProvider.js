import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { PageProvider } from "./PageContext";
import { SmartContractProvider } from "./SmartContractContext";
import { UserProvider } from "./UserContext";

const providers = [
  UserProvider,
  PageProvider,
  SmartContractProvider,
  LoadingProvider,
];
export const AppContextProvider = CombineComponents(...providers);
