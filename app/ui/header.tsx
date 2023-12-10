'use client'

import React from 'react'
import { SunIcon, MoonIcon, HomeIcon } from '@heroicons/react/20/solid';
import Link from "next/link";
import { useThemeMode } from '../context';

export default function Header() {
    const {themeMode, saveThemeMode} = useThemeMode()

    const handleSetTheme = () => {
        saveThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }

    return (
        <header className={themeMode}>
            <div className={`mx-20 h-20 p-4 border-b 
                dark:text-slate-100 dark:border-slate-50/20
                text-neutral-800 border-neutral-950`}>
            
                <div className="flex justify-between">
                    <Link href="/">
                        <div className="flex px-2">
                            <HomeIcon className="h-5 w-5" />
                            <h1 className="ml-2">Home</h1>
                        </div>
                    </Link>

                    <div>
                        <div className='flex px-2'>
                            <button onClick={handleSetTheme}>
                                {themeMode === 'dark' ? <SunIcon className='h-5 w-5 mx-1'/> : <MoonIcon className='h-5 w-5 mx-1'/> }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

