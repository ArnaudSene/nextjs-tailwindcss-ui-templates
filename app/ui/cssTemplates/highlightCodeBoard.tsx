import React from 'react'
import Highlighted from './highlighted'
import Rendered from './rendered'



export default function HighLightCodeBoard({
    title,
    description,
    height,
    codeString,
    codeRendredString
}: {
    title: string,
    description: string,
    height: string,
    codeString: string,
    codeRendredString: string
}) {

    return (
        <div className={`flex flex-col text-sm`}>
            <div className={`flex justify-center`}>
                <div className='w-full max-w-[1400px]'>
                    <h1 className='px-1 pt-4 text-base font-semibold border-b border-slate-500 w-fit'>
                        {title}
                    </h1>
                    <p className='p-4'>{description}</p>
                </div>
            </div>

            <div className={`flex items-center justify-center`}>
                <Highlighted title={title} height={height} codeString={codeString} />
                <Rendered height={height} codeString={codeRendredString} />
            </div>
        </div>
    )
}