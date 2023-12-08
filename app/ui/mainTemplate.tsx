import React from 'react'


export default function MainTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className={`mb-auto p-4 text-slate-100 text-base`}>
            {children}
        </div>
    )
}