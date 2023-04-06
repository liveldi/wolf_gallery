import { useState } from 'react';

import { Photo } from './types';
import { PreviewGallery } from './PreviewGallery';
import { TransitionPhoto } from './TransitionPhoto';
import { Navigation } from './Navigation';

import style from './index.module.scss';

interface WolfGalleryProps {
    photos: Photo[],
}

export const WolfGallery: React.FC<WolfGalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }

    const [ indexActivePhoto, setIndexActivePhoto ] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return (
        <div className={style.wolfGallery}>
            <div className={style.wolfGalleryContainer}>
                <TransitionPhoto
                    prevPhoto={prevPhoto}
                    currentPhoto={activePhoto}
                    nextPhoto={nextPhoto}
                    className={style.wolfGalleryMainPhoto}
                />
                <Navigation
                    className={style.wolfGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.wolfGalleryPreviewList}
                setNewPhoto={setIndexActivePhoto}
            />
        </div>
    )
}