import { useState } from 'react';

import { Photo } from './types.ts';
import { PreviewList } from './PreviewList';
import { MainPhoto } from './MainPhoto';

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
            <MainPhoto
                photo={activePhoto}
                className={style.wolfGalleryMainPhoto}
            />
            <PreviewList
                photos={photos}
                className={style.wolfGalleryPreviewList}
            />
        </div>
    )
}