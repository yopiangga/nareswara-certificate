import React from "react";

import { CombineComponents } from "./CombineComponents";
import { PageProvider } from "./PageContext";
import { UserProvider } from "./UserContext";

const providers = [UserProvider, PageProvider];
export const AppContextProvider = CombineComponents(...providers);
