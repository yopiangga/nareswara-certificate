import React from "react";

import { CombineComponents } from "./CombineComponents";
import { LoadingProvider } from "./LoadingContext";
import { PageProvider } from "./PageContext";
import { SidebarProvider } from "./SidebarContext";
import { SmartContractProvider } from "./SmartContractContext";
import { UserProvider } from "./UserContext";

const providers = [
  UserProvider,
  PageProvider,
  SmartContractProvider,
  LoadingProvider,
  SidebarProvider,
];
export const AppContextProvider = CombineComponents(...providers);
