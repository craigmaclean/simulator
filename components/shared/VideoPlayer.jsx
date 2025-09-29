import React from 'react'

const VideoPlayer = () => {
    return (

        <div className="relative rounded-md overflow-hidden shadow-lg">
            {/* Video Element (hidden initially) */}
            <video id="heroVideo" className="w-full h-full object-cover" poster="./simulator-video-thumbnail.jpg" controls style={{display: 'none'}}>
                <source src="https://karlbryan.s3.amazonaws.com/simulator/Sim-Video-1.mp4" type="video/mp4" />
                {/*<source src="your-video.webm" type="video/webm">*/}
                Your browser does not support the video tag.
            </video>
            {/* Custom Thumbnail Overlay */}
            <div id="videoOverlay" className="relative aspect-video bg-gray-900">
                <img src="./simulator-video-thumbnail.jpg" alt="The Power of Compounding" className="w-full h-full object-cover" />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity hover:bg-opacity-40">
                <button id="playButton" className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all hover:scale-110 shadow-lg" aria-label="Play video">
                    <svg className="w-8 h-8 text-navy ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </button>
                </div>
                {/* Optional Video Title/Duration */}
                <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">The Power of Compounding</p>
                <p className="text-xs opacity-80">2:34</p>
                </div>
            </div>
        </div>

    );
}

export default VideoPlayer;
