import React from "react";

import { CombineComponents } from "./CombineComponents";
import { PageProvider } from "./PageContext";
import { SmartContractProvider } from "./SmartContractContext";
import { UserProvider } from "./UserContext";

const providers = [UserProvider, PageProvider, SmartContractProvider];
export const AppContextProvider = CombineComponents(...providers);
