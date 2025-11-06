export default function VideoPlayer() {
    return (

        <div className="relative overflow-hidden rounded-md shadow-lg">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src="https://player.vimeo.com/video/1134359264?h=d2d4f270ac&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder={0}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                title="Sim-Homepage-Video-1"
              />
            </div>


            {/* Video Element (hidden initially) */}
            {/* <video id="heroVideo" className="object-cover w-full h-full" poster="./simulator-video-thumbnail.jpg" controls style={{display: 'none'}}>
                <source src="https://karlbryan.s3.amazonaws.com/simulator/Sim-Video-1.mp4" type="video/mp4" />*/}
                {/*<source src="your-video.webm" type="video/webm">*/}
                {/*Your browser does not support the video tag.
            </video>*/}
            {/* Custom Thumbnail Overlay */}
            {/*<div id="videoOverlay" className="relative bg-gray-900 aspect-video">
                <img src="./simulator-video-thumbnail.jpg" alt="The Power of Compounding" className="object-cover w-full h-full" />*/}
                {/* Play Button Overlay */}
                {/*<div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-30 hover:bg-opacity-40">
                <button id="playButton" className="flex items-center justify-center w-20 h-20 transition-all bg-white rounded-full shadow-lg bg-opacity-90 hover:bg-opacity-100 hover:scale-110" aria-label="Play video">
                    <svg className="w-8 h-8 ml-1 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </button>
                </div>*/}
                {/* Optional Video Title/Duration */}
                {/*<div className="absolute text-white bottom-4 left-4">
                <p className="text-sm font-semibold">The Power of Compounding</p>
                <p className="text-xs opacity-80">2:34</p>
                </div>
            </div>*/}
        </div>

    );
}
