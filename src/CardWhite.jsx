import React from "react";

const CardWhite = ({ customBackground, photo, name, title, content }) => {
    return (
        <div className={customBackground}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <img src={photo} alt="user profil" className="rounded-full w-12 h-12 hover:border-2 border-dark hover:cursor-pointer" />
                <div className="flex flex-col justify-center">
                    <span className="text-dark"><b>{name}</b></span>
                    <span className="text-gray opacity-50 text-sm">Verified Graduate</span>
                </div>
            </div>
            <h2 className="my-4 text-gray font-medium text-2xl">
                <b>{title}</b>
            </h2>
            <p className="text-gray opacity-50 text-base">{content}</p>
        </div>
    );
};

export default CardWhite;
