import mapsAndNavigationIcon from './Images/mapsAndNavigationIcon.png';
import sportsIcon from './Images/sportsIcon.png';
import educationalIcon from './Images/educationalIcon.png';
import musicAndAudioIcon from './Images/musicAndAudioIcon.png';
import communicationIcon from './Images/communicationIcon.png';
import productivityIcon from './Images/productivityIcon.png';
import weatherIcon from './Images/weatherIcon.png';
import healthAndFitnessIcon from './Images/healthAndFitnessIcon.png';

export const listOne = {
    cards: [
        {
            category: "Health & fitness",
            url: healthAndFitnessIcon,
            id: 1
        },
        {
            category: "Weather",
            url: weatherIcon,
            id: 2
        },
        {
            category: "Productivity",
            url: productivityIcon,
            id: 3
        },
        {
            category: "Communication",
            url: communicationIcon,
            id: 4
        }
    ]
};

export const listTwo = {
    cards: [
        {
            category: "Music & audio",
            url: musicAndAudioIcon,
            id: 5
        },
        {
            category: "Educational",
            url: educationalIcon,
            id: 6
        },
        {
            category: "Sports",
            url: sportsIcon,
            id: 7
        },
        {
            category: "Maps & Navigation",
            url: mapsAndNavigationIcon,
            id: 8
        }
    ]
};
