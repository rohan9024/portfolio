import Image from "next/image";
import React from "react";
import bus from "../assets/bus.gif"

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src={bus}
                width={400}
                height={400}
                alt="bus gif"
                className='object-contain  '
            />
        </div>
    );
};

export default Loader;
