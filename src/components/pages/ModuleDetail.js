import React from "react";
import { Player } from 'video-react';
const ModuleDetail = () =>{

    const src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    return(
        <>
            <div className="row">
                <div>
                    {<video controls>
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                    </video>}
                    
                </div>
                <div >
                    {/* <h3><span>1</span>Module name</h3> */}
                </div>
            </div>
        </>
    );
}

export default ModuleDetail