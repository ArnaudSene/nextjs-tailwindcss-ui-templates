import Link from "next/link"
import { HomeIcon } from "@heroicons/react/20/solid"
import Header from "../header"
import Footer from "../footer"
import BaseTemplate from "../baseTemplate"
import MainTemplate from "../mainTemplate"


export default function Home() {
    return (
        <BaseTemplate>
            <Header />

            <MainTemplate>
                <div className={`p-2`}>
                    <div className={`border-b border-teal-200 w-fit`}>
                        <h1>Some examples with CSS:</h1>
                    </div>
                    <div className={`p-2 text-sm`}>
                        <Link href={`/templates`}>Header and Footer with Tailwind CSS</Link>
                    </div>
                </div>
            </MainTemplate>

            <Footer />
        </BaseTemplate>
    )
}
