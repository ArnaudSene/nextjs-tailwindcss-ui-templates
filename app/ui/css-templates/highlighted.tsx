'use client'

import React, { useState } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, vscDarkPlus, a11yDark, dracula, duotoneDark, duotoneSea } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { 
    ClipboardDocumentCheckIcon, 
    DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";


const STYLE = duotoneSea


const Highlighted = ({
    title,
    height,
    codeString,
    language
}: {
    title: string,
    height: string,
    codeString: string,
    language: string
}) => {
    const [copyIcon, setCopyIcon] = useState(<DocumentDuplicateIcon className={`h-5 w-5`}/>)
    const [copyText, setCopyText] = useState('Copy')
    const onCopy = () => {
        setCopyIcon(<ClipboardDocumentCheckIcon className={`h-5 w-5`}/>)
        setCopyText('Copied')
    }

    return (
        <div className={`overflow-y-auto shadow-sm shadow-teal-400 ${height} w-full max-w-[700px] p-2 bg-gray-900 rounded-md border border-gray-500 m-1`}>
            
            <div className={`flex justify-between text-gray-400 p-2 border-b border-gray-500`}>
                <div className="flex w-full">
                    <div>{title}</div> 
                    <div className="ml-10 italic">Language: {language}</div>
                </div>
                <CopyToClipboard text={codeString} onCopy={onCopy}>
                <button className="flex">
                    <span>{copyIcon}</span>
                    <span className="ml-1">{copyText}</span>
                </button>
                </CopyToClipboard>
            </div>

            <SyntaxHighlighter 
                language={language}
                style={STYLE} 
                lineNumberContainerStyle={{
                    color: 'rgb(156 163 175)',
                    backgroundColor: '#f0f0f0',
                    paddingLeft: '20px'
                }}
                showLineNumbers={true}
                showInlineLineNumbers={true}
                wrapLines={true}
                wrapLongLines={true}
                customStyle={{
                    backgroundColor: 'transparent'
                }}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default Highlighted
