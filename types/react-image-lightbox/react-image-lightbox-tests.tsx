import * as React from "react";
import Lightbox from "react-image-lightbox";

const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
];

export const LightboxTest: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = React.useState<boolean>(false);
    const [lightboxImageIndex, setLightboxImageIndex] = React.useState<number>(0);
    const handleCloseLightbox = (): void => setIsLightboxOpen(false);
    const handleClickPreviousImage = (): void =>
      setLightboxImageIndex((lightboxImageIndex + images.length - 1) % images.length);
    const handleClickNextImage = (): void =>
      setLightboxImageIndex((lightboxImageIndex + 1) % images.length);

    return (
        <Lightbox
            mainSrc={images[lightboxImageIndex]}
            nextSrc={images[(lightboxImageIndex + 1) % images.length]}
            prevSrc={images[(lightboxImageIndex + images.length - 1) % images.length]}
            onCloseRequest={handleCloseLightbox}
            enableZoom={false}
            onMovePrevRequest={handleClickPreviousImage}
            onMoveNextRequest={handleClickNextImage}
        />
    );
};
