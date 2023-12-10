'use client'

import { useThemeMode } from "../context"

export default function Footer() {
    const { themeMode } = useThemeMode()

    return (
        <footer className={themeMode} >
            <div className="mx-20 h-20 p-4 
                dark:text-slate-100 dark:border-slate-50/20 
                text-neutral-800 
                border-neutral-950/2">
                <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
            </div>
        </footer>
    )
}