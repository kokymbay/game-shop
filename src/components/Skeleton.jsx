import React from 'react';
import ContentLoader from "react-content-loader"




function Skeleton(props) {
    return (
        <div className="skeleton-items">
            <ContentLoader
            speed={3}
            width={350}
            height={410}
            viewBox="0 0 350 410"
            backgroundColor="#3c2f2f"
            foregroundColor="#907a7a"
            {...props}
        >
            <rect x="0" y="16" rx="6" ry="6" width="350" height="254" />
            <rect x="0" y="293" rx="0" ry="0" width="200" height="15" />
            <rect x="0" y="323" rx="0" ry="0" width="133" height="16" />
            <rect x="0" y="356" rx="6" ry="6" width="64" height="30" />
            <rect x="84" y="356" rx="6" ry="6" width="64" height="30" />
            <circle cx="185" cy="373" r="17" />
        </ContentLoader>
        </div>
    )
}

export default Skeleton;