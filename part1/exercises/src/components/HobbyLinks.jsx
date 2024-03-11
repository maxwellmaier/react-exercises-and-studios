import React from 'react';

function HobbyLinks() {
    // Define an array of URLs for websites related to your hobbies
    const hobbyLinks = [
        "https://store.crunchyroll.com/collections/manga/",
        "https://www.dynamicdiscs.com/pages/disc-golf-store",
        "https://weedmaps.com/",
        // Add more URLs as needed
    ];

    return (
        <div>
            <h2>Websites for My Hobbies</h2>
            <a href={hobbyLinks[0]}>Crunchyroll Manga Shop</a>
            <br />
            <a href={hobbyLinks[1]}>Dynamic Discs Shop</a>
            <br />
            <a href={hobbyLinks[2]}>Weedmaps 420</a>
            {/* Add more links for other hobbies */}
        </div>
    );
}

export default HobbyLinks;
