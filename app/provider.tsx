'use client';

import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { MainErrorFallback } from "./components/errors/main";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

type AppProviderProps = {
    children: React.ReactNode;
}

export const AppProvider = ({children}: AppProviderProps) => {

    return (
        <AppRouterCacheProvider>
            <ErrorBoundary errorComponent={MainErrorFallback} >
                {children}
            </ErrorBoundary>
        </AppRouterCacheProvider>
    )
}