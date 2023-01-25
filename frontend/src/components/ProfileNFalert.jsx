import React from "react"
export default function ProfileNFalert(){

    return(
        <div className="alert shadow-lg w-60 h-40">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
            <h3 className="font-bold">ERROR!</h3>
            <div className="text-xs">The profile you are trying to access doesn't exist</div>
            </div>
        </div>
        <div className="flex-none">
            <button className="btn btn-sm">Sign up</button>
            <button className="btn btn-sm">Try Again</button>
        </div>
        </div>
    )
}