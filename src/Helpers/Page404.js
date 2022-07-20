import React, { useState, useEffect } from 'react'

const Page404 = () => {

    const [Loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 300);
    })

    return (
        <>
            {!!Loader && <div className="height-100 overlay-loading ongoing-payment-spin">
                <div className="spin-load" />
            </div>}
            <img src={'https://i.stack.imgur.com/6M513.png'} className='w-100' />
        </>
    )
}
export default Page404;