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
        <div className={`shadow-2xl shadow-gray-600 ${height} w-full max-w-[700px] p-2 bg-gray-900 rounded-md border border-gray-500 m-1`}>
            {parsedCode}
        </div>
    )
}

export default Rendered
