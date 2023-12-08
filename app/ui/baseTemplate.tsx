import React from 'react'


export default function BaseTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className={`flex flex-col h-screen justify-between 
        bg-gradient-to-b from-gray-950 to-slate-900
        text-base text-slate-100`}>
            {children}
        </div>
    )
}