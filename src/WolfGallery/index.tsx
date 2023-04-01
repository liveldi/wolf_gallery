import { useState } from 'react';

import { Photo } from './types.ts';
import { PreviewGallery } from './PreviewGallery/index.tsx';
import { MainPhoto } from './MainPhoto';
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

    return (
        <div className={style.wolfGallery}>
            <div className={style.wolfGalleryContainer}>
                <MainPhoto
                    photo={activePhoto}
                    className={style.wolfGalleryMainPhoto}
                />
                <Navigation className={style.wolfGalleryNavigation}/>
            </div>
            <PreviewGallery
                activePhoto={indexActivePhoto + 1}
                photos={photos}
                className={style.wolfGalleryPreviewList}
            />
        </div>
    )
}