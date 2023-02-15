import React from 'react'

const CardColor = ({ customBackground, photo, name, title, content }) => {
    return (
        <div className={customBackground}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <img src={photo} alt="user profil" className="rounded-full w-12 h-12 hover:border-2 border-violet hover:cursor-pointer xl:w-6 xl:h-6" />
                <div className="flex flex-col justify-center">
                    <span className='text-white opacity-80 hover:cursor-pointer xl:text-xs'><b>{name}</b></span>
                    <span className='text-blue opacity-50 text-sm xl:text-xs'>Verified Graduate</span>
                </div>
            </div>
            <h2 className="my-4 text-white font-medium text-2xl xl:text-sm xl:my-2">
                <b>{title}</b>
            </h2>
            <p className="text-white opacity-60 text-base xl:text-xs">{content}</p>
        </div>
    )
}

export default CardColor