import React from 'react';
import bannerMain from '../../../assets/banner-main.png'; 
import bgShadow from '../../../assets/bg-shadow.png'; 

const Banner = () => {
    return (
        <div className="container mx-auto my-4 md:my-6 px-4 md:px-0">
            <div 
                /* Reduced mobile min-h to 300px and py to 6 */
                className="hero min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-3xl py-6 sm:py-10 md:py-16"
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#1a1a1a'
                }}
            >
                <div className="hero-content text-center text-neutral-content px-2 sm:px-4">
                    <div className="max-w-3xl flex flex-col items-center">
                        
                        {/* Smaller logo on mobile: w-32 */}
                        <img 
                            src={bannerMain} 
                            alt="Cricket Banner" 
                            className="mb-4 md:mb-8 w-32 sm:w-56 md:w-80 drop-shadow-2xl animate-float" 
                        />

                        {/* Title: reduced to text-xl on smallest devices */}
                        <h1 className="mb-3 md:mb-5 text-xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h1>
                        
                        {/* Paragraph: text-sm for very small screens */}
                        <p className="mb-5 md:mb-8 text-sm sm:text-base md:text-lg text-gray-400 font-medium">
                            Beyond Boundaries Beyond Limits
                        </p>

                        <div className="inline-block p-1 border border-[#E7FE29] rounded-xl">
                            <button className="btn btn-sm sm:btn-md bg-[#E7FE29] hover:bg-[#d4e925] border-none text-black font-bold px-4 sm:px-8 rounded-lg shadow-lg transition-all active:scale-95">
                                Claim Free Credit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;