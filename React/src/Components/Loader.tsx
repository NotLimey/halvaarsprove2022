import React from "react";

interface LoaderProps {
    fullScreen?: boolean;
    text?: string;
}

const Loader : React.FC<LoaderProps> = (props : LoaderProps) => {
    if(props.fullScreen) {
        return (
            <div className="fullscreen-loader">
                <svg className="spinner" width="80px" height="80px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
                {props.text && <p className="text-center">{props.text}</p>}
            </div>
        );
    }else {
        return (
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        );
    }
}

export default Loader;