import BookIcon from "../assets/images/products/book-icon.png";
// import JournalIcon from "../assets/images/products/journal-icon.png";
// import MovieIcon from "../assets/images/products/movie-icon.png";
// import MusicAccessoryIcon from "../assets/images/products/music-accessories.png";
// import SongIcon from "../assets/images/products/song-icon.png";
// import StationaryIcon from "../assets/images/products/stationary-icon.png";
import VideoGameIcon from "../assets/images/products/video-game-icon.png";
import GameAccessoryIcon from "../assets/images/products/gaming-accessories-icon.png";
import DefaultIcon from "../assets/images/products/default-prod-icon.png";

import { ProductImageCodes } from "../appConfig.json";

const categoryImgTable = require("../dataStore/categoryImgTable.json")

export function getProductImage(categoryCode) {
    const imageToShow = getProductImageCode(categoryCode);

    const {
        VideoGame,
        GameAccessory
    } = ProductImageCodes

    switch (imageToShow) {
        case VideoGame:
            return VideoGameIcon
        case GameAccessory:
            return GameAccessoryIcon
        default:
            return DefaultIcon
    }
}


function getProductImageCode(categoryCode) {
    let imageCode = undefined;
    categoryImgTable.forEach(category => {

        const {
            categoryCodes
        } = category

        const isCategoryCodeFound = categoryCodes.includes(categoryCode);
        if (isCategoryCodeFound) {
            imageCode = category.imageCode;
            return;
        }
    })

    return imageCode;
}
