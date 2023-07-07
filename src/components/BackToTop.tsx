'use client';

import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const BackToTop = () => {
const [position, setPosition] = useState(0)


    if(window.scrollY < 100) return null
    return (
        <button onClick={() => window.scrollTo(0, 0)} className="fixed bottom-5 right-4 bg-amber-700 text-white p-2 rounded-full">
            <FaArrowAltCircleUp />
        </button>
    )
}

export default BackToTop