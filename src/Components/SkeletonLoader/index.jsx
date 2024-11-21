import React from 'react';

const SkeletonLoader = ({ count = 8 }) => {
    const skeletons = Array.from({ length: count });

    return (
        <>
        {skeletons.map((_, index) => (
            <div
            key={index}
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 animate-pulse"
            >
            <div className="bg-gray-300 h-64 rounded-md shadow-sm"></div>
            <div className="bg-gray-300 h-6 mt-4 rounded-md"></div>
            <div className="bg-gray-300 h-6 mt-2 w-3/4 rounded-md"></div>
            </div>
        ))}
        </>
    );
};

export default SkeletonLoader;
