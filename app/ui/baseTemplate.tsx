'use client'

import React from 'react'
import { useThemeMode } from '../context'


export default function BaseTemplate({ children }: { children: React.ReactNode }) {
    const {themeMode} = useThemeMode()
    const _style = {
        bg: 'dark:bg-black/90 '
    }
    
    return (
        <div className={themeMode}>
            <div className={`flex flex-col min-h-screen justify-between 
                text-base bg-gradient-to-b 
                dark:from-gray-950 dark:to-slate-900
                from-gray-300 to-gray-100
                text-neutral-800 dark:text-slate-100
                overflow-x-auto 
                `}>
                {children}
            </div>
        </div>
    )
}