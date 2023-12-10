import { ReactNode } from "react";
import { ThemeModeContextProvider } from "./context";

export default function Provider({children}: {children: ReactNode}) {

    return (
        <>
            <ThemeModeContextProvider>
                {children}
            </ThemeModeContextProvider>
        </>
    )
}