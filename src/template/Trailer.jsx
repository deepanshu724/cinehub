import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Trailer = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const category = pathname.includes('movie') ? 'movie' : 'tv';
    const ytvid = useSelector((state) => state[category].info.videos);
    
    // State to manage visibility of the trailer
    const [isVisible, setIsVisible] = useState(true);

    // Function to close the trailer
    const handleClose = () => {
        setIsVisible(false);
        navigate(-1);  // Navigate back to the previous page
    };

    // Early return if there's no video
    if (!ytvid || !ytvid.key) {
        return null;
    }

    return (
        isVisible && (
            <div
                className='absolute w-full h-full flex items-center justify-center top-0 left-0 z-100 bg-[rgba(0,0,0,0.88)]'
                onClick={handleClose}
            >
                <ReactPlayer controls={true}  url={`https://www.youtube.com/watch?v=${ytvid.key}`} />
            </div>
        )
    );
};

export default Trailer;
