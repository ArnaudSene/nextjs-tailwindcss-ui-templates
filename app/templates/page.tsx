import React from "react"
import HighLightCodeBoard from "../ui/cssTemplates/highlightCodeBoard";
import Footer from "../ui/footer";
import Header from "../ui/header";
import BaseTemplate from "../ui/baseTemplate";
import MainTemplate from "../ui/mainTemplate";

const CssTemplates = () => {

    const headerFooter = `<div className="flex flex-col h-screen justify-between bg-gradient-to-b from-black/90 to-slate-900 text-base text-slate-100">
    <header className="mx-20 text-slate-100 p-4 border-b border-slate-50/20">
        <h1>Tailwind CSS - code example </h1>
    </header>
    <main className="mb-auto p-4 text-slate-100 text-base">
        <div className="p-2">
            <div className="border-b border-teal-200 w-fit">
                <h1>Some examples with CSS:</h1>
            </div>
        </div>
    </main>
    <footer className="mx-20 h-20 text-slate-100 p-4">
        <p>&copy; 2023 Mon Site Web. Tous droits réservés.</p>
    </footer>
</div>`

    const headerFooterRendering = headerFooter.replace('h-screen', 'h-full')
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
