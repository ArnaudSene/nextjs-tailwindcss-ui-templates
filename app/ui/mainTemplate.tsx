import React from 'react'


export default function MainTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div className={`mb-auto p-4 text-base overflow-x-auto `}>
            {children}
        </div>
    )
}