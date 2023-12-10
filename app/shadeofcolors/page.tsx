'use client'

import React, {useEffect, useState} from "react"
import Footer from "../ui/footer";
import Header from "../ui/header";
import BaseTemplate from "../ui/baseTemplate";
import MainTemplate from "../ui/mainTemplate";
import { generateColorShades } from "../lib/color-shade";
import HighLightCodeBoard from "../ui/css-templates/highlightCodeBoard";
import Highlighted from "../ui/css-templates/highlighted";

const CssTemplates = () => {   
    type T_ColorMap = {[key: number]: string}
    type T_ColorSet = {[key: string]: T_ColorMap}

    const [colorName, setColorName] = useState('manta')
    const [darkestColor, setDarkestColor] = useState('#000000')
    const [lightestColor, setLightestColor] = useState('#ffffff')
    const [shadeNum, setShadeNum] = useState(11)
    const [colorShades, setColorShades] = useState([''])
    const colorIndex = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    const incrementValue = 100

    const [codeString, setCodeString] = useState('{}')
    const [colorSet, setColorSet] = useState<T_ColorSet>({})
    const headerFooterHeight = 'h-[500px]'

    const handleSubmitShadder = () => {
        const _colorShades: string[] = generateColorShades(darkestColor, lightestColor, shadeNum)
        setColorShades(_colorShades)      

        let colorMap: T_ColorMap = {}
        let colorSet: T_ColorSet = {}
        
        let index = 0
        for (let i = 0; i < _colorShades.length; i++) {
            if (_colorShades.length > colorIndex.length) {
                index = index + incrementValue
            } else {
                index = colorIndex[i]
            }
            let j = {
                index: _colorShades[i]
            }
            colorMap[index] = _colorShades[i]
        }

        colorSet[colorName] = colorMap
        setColorSet(colorSet)
        
        const toJson = JSON.stringify(colorSet, null, 2)
        setCodeString(toJson)
    }

    return (
        <BaseTemplate>
            <Header />
            
            <MainTemplate>

                <div className="max-w-full">
                    <div className="p-2 rounded text-sm">
                        <div className="flex flex-col p-2">
                            <h1 className="font-semibold p-1">Create shade of colors</h1>
                            
                            <div className="flex my-1">
                                <label htmlFor='colorName' className="p-1 m-1 w-44">Provide a color name</label>
                                <input id='colorName' name='colorName' type='string' placeholder="color name" 
                                    className="w-36 rounded p-1 m-1 dark:bg-slate-600 bg-slate-100" 
                                    onChange={(e) => setColorName(e.target.value)} />
                                <span className="dark:text-stone-100 p-1 m-1 w-16">{colorName}</span>
                            </div>
                            
                            <div className="flex my-1">
                                <label htmlFor='darkest' className="p-1 m-1 w-44">Provide the darkest color</label>
                                <input id='darkest' name='darkest' type='string' placeholder="#000000" 
                                    className="w-36 rounded p-1 m-1 dark:bg-slate-600 bg-slate-100" 
                                    onChange={(e) => setDarkestColor(e.target.value)} />
                                <span className="dark:text-stone-100 p-1 m-1 w-16">{darkestColor}</span>
                                <div className={`rounded p-4`} style={{backgroundColor: darkestColor}}></div>
                            </div>

                            <div className="flex my-1">
                                <label htmlFor='lightest' className="p-1 m-1 w-44">Provide the lightest color</label>
                                <input id='lightest' name='lightest' type='string' placeholder="#ffffff" 
                                    className="w-36 rounded p-1 m-1 dark:bg-slate-600 bg-slate-100" 
                                    onChange={(e) => setLightestColor(e.target.value)} />
                                <div className="dark:text-stone-100 p-1 m-1 w-16">{lightestColor}</div>
                                <div className={`rounded p-4`} style={{backgroundColor: lightestColor}}></div>
                            </div>

                            <div className="flex my-1">
                                <label htmlFor='shadeNum' className="p-1 m-1 w-44">Total of shade</label>
                                <input id='shadeNum' name='shadeNum' type='number' placeholder={`${shadeNum.toString()} (default)`} 
                                    className="w-36 rounded p-1 m-1 dark:bg-slate-600 bg-slate-100" 
                                    onChange={(e) => setShadeNum(Number(e.target.value))} />
                                <div className="dark:text-stone-100 p-1 m-1 w-16">{shadeNum}</div>
                            </div>

                            <div className="border-t border-slate-500 dark:border-slate-700 my-3 w-[500px]">
                                <button 
                                    className="mt-4 p-2 w-20 rounded bg-slate-800 text-teal-200 dark:bg-teal-200 dark:text-slate-900"
                                    onClick={handleSubmitShadder}
                                >
                                    Execute
                                </button>
                            </div>

                            <div className="mt-4 flex">
                                <div className="flex flex-wrap">
                                    {colorShades.map((color, index) => (
                                        <div key={index} className={`${index > shadeNum/2 ? 'dark:text-slate-900': 'text-slate-100'} text-center rounded p-3 mr-1 w-24`} style={{backgroundColor: color}}>
                                            {color}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <Highlighted 
                                    title='TailwindCss Extend color' 
                                    height={headerFooterHeight} 
                                    codeString={codeString} 
                                    language="typescript"
                                    />
                            </div>

                        </div>
                    </div>

                </div>                

            </MainTemplate>
            <Footer />
        </BaseTemplate>
    )
}

export default CssTemplates
