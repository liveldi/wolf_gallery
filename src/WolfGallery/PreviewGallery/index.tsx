import cl from 'classnames';

import { Photo, CommonClassProps } from '../types.ts';

import style from './index.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
    photos: Photo[];
    activePhoto: number;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhoto,
    photos,
    className
}) => {
    if (!photos.length) {
        return null;
    }

    return (
        <div className={cl(style.previewGallery, className)}>
            <ul className={style.previewGalleryTrack}>
                {photos.map((photo) => (
                    <li
                        key={photo.id}
                        className={style.previewGalleryPreview}
                    >
                        <img
                            src={photo.src}
                            alt={photo.description}
                            loading="lazy"
                            className={style.previewGalleryImage}
                        />
                    </li>
                ))}
            </ul>
            <div className={style.previewGalleryCover}>
                {activePhoto} / {photos.length}
            </div>
        </div>
    )
}