import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';

const Header = () => {
    const [wallpaper, setWallpaper] = useState(null);

    useEffect(() => {
        const getWallpaper = async () => {
            try {
                const { data } = await axios.get('/trending/all/day');
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const random = data.results[randomIndex];
                setWallpaper(random);
            } catch (error) {
                console.log(error);
            }
        };

        getWallpaper(); // Initial call to getWallpaper

        const intervalId = setInterval(getWallpaper, 5000); // Set interval to call getWallpaper every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    if (!wallpaper) {
        return <h1>Loading...</h1>;
    }

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path}`;
    const windowWidth = window.innerWidth;
    const sliceLength = windowWidth >= 768 ? 200 : 100;
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
               
            }}
            className='w-full h-[50vh] flex flex-col justify-end sm:p-[5%] p-[5%]  items-start'
        >
            <h1 className='mt-3 w-[70%] text-2xl sm:text-3xl text-wrap lg:text-5xl text-white font-bold'>
                {wallpaper.title || wallpaper.name || wallpaper.original_name || wallpaper.original_title}
            </h1>
            <p className='text-white w-[70%] mt-3 mb-3'>
            {wallpaper.overview.slice(0, sliceLength)}...
                <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`}  className='text-blue-400'> more</Link>
            </p>
            <p className='text-white'>
                <i className="text-[#6556CD] p-2 ri-megaphone-fill"></i>{wallpaper.release_date || wallpaper.first_air_date}
                <i className="text-[#6556CD] p-2 ml-5 ri-album-fill"></i>{wallpaper.media_type && wallpaper.media_type.toUpperCase()}
            </p>
            <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className='bg-[#6556CD] text-white p-3 rounded mt-5' >
                    Explore
            </Link>
        </div>
    );
};

export default Header;
