import React from "react"
import HighLightCodeBoard from "../ui/css-templates/highlightCodeBoard";
import Footer from "../ui/footer";
import Header from "../ui/header";
import BaseTemplate from "../ui/baseTemplate";
import MainTemplate from "../ui/mainTemplate";

const CssTemplates = () => {

    const headerFooter = `<div className="flex flex-col min-h-screen justify-between text-sm text-slate-100">
    <header className="text-slate-100 p-4 bg-gray-600">
        <h1 className='font-semibold'>Header section</h1>
    </header>
    <main className="mb-auto p-4 text-slate-100 bg-gray-800 h-screen">
        <div className="p-2 w-fit">
            <h1 className='font-semibold'>Title 1</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis quam nulla officia eaque.</p>
        </div>

        <div className="p-2 w-fit">
            <h1 className='font-semibold'>Title 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </main>
    <footer className="text-slate-100 p-4 bg-gray-600">
        <h1 className='font-semibold'>Footer section</h1>
        <p>&copy; 2023 My Web site. All rights reserved.</p>
    </footer>
</div>`

    const headerFooterRendering = headerFooter.replace('min-h-screen', 'h-full')
    const headerFooterHeight = 'h-[500px]'

    const button = `<button className='rounded p-4 text-slate-100 bg-blue-600 text-sm'>My Button</button>`
    const buttonHeight = 'h-[200px]'

    return (
        <BaseTemplate>
            <Header />
            <MainTemplate>
                <div className="py-2">
                    <HighLightCodeBoard
                        title="Header - Main - Footer"
                        description="Define a header, a main and afooter section. The footer is always stick to bottom"
                        height={headerFooterHeight}
                        codeString={headerFooter}
                        codeRendredString={headerFooterRendering}
                    />
                </div>

                <div className="py-2">
                    <HighLightCodeBoard
                        title="Button"
                        description="A simple button"
                        height={buttonHeight}
                        codeString={button}
                        codeRendredString={button}
                    />
                </div>
            </MainTemplate>
            <Footer />
        </BaseTemplate>
    )
}

export default CssTemplates
