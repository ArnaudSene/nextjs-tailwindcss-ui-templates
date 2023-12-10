import React from "react"
import parse from "html-react-parser";

const Rendered = ({
    height,
    codeString
}: {
    height: string,
    codeString: string
}) => {
    const parsedCode = parse(codeString);

    return (
        <div className={`shadow-sm shadow-teal-400 ${height} w-full p-1 max-w-[700px] bg-gray-900 rounded-md border border-gray-500 m-1`}>
            {parsedCode}
        </div>
    )
}

export default Rendered
