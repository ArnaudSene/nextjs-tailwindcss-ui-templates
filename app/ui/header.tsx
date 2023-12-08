import React from 'react'
import PropTypes from 'prop-types'
import HomeIcon from "@heroicons/react/20/solid/esm/HomeIcon";
import Link from "next/link";


Header.propsTypes = {
    style: PropTypes.string
}

Header.defaultProps = {
    style: `mx-20 h-20 text-slate-100 p-4 border-b border-slate-50/20`
}

export default function Header({
    style
}: {
    style: string
}) {
    return (
        <header className={`${style}`}>
            <div className="flex">
                <Link href="/">
                    <div className="flex px-2">
                        <HomeIcon className="h-5 w-5" />
                        <h1 className="ml-2">Home</h1>
                    </div>
                </Link>

                <div>
                    {/* <h1 className="ml-2">Tailwind CSS - code example </h1> */}
                </div>
            </div>

        </header>
    )
}

