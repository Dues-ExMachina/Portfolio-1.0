import React from 'react'
import Image from 'next/image'

const Clickhere = () => {
    return (
        <div className=''>
            {/* Click to open */}
            <div className="absolute flex flex-col w-[200px] h-[180px] left-1/2 bottom-20 transform -translate-x-1/2 items-center text-white">
                <div className="upimg mr-auto absolute">
                    <Image
                        className="h-10 w-10"
                        src="/image/upimg.svg"
                        alt="Up icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div className="click text-center">
                    <p>Click</p>
                    <p>TO Open</p>
                </div>
                <div className="dwnimg ml-auto absolute ">
                    <Image
                        className="h-10 w-10 transform rotate-45"
                        src="/image/dwnimg.svg"
                        alt="Down icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Clickhere
