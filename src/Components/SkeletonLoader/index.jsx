import React from 'react';
import img1 from '/img1.png';  // Adjust the path according to your folder structure
import img2 from '/img2.jpeg';

const SkeletonLoader = ({ count = 8 }) => {
    const skeletons = Array.from({ length: count });
    const images = [img1, img2];

    return (
        <>
            {skeletons.map((_, index) => (
                <div
                    key={index}
                    className="col-span-1 animate-pulse transition-all duration-1000"
                >
                    <div className="bg-gray-300 h-64 rounded-md shadow-sm">
                        <img 
                            src={images[index % images.length]} 
                            alt={`Skeleton ${index}`} 
                            className="h-full w-full object-cover rounded-md"
                        />
                    </div>
                    <div className="bg-gray-300 h-6 mt-4 rounded-md"></div>
                    <div className="bg-gray-300 h-6 mt-2 w-3/4 rounded-md"></div>
                </div>
            ))}
        </>
    );
};

export default SkeletonLoader;
