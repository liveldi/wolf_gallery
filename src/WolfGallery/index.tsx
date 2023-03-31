import {useState} from 'react';
import style from './index.module.scss';

interface Photo {
    id: number;
    src: string;
    description: string;
}
interface WolfGalleryProps {
    photos: Photo[],
}

console.log(style)

export const WolfGallery: React.FC<WolfGalleryProps> = ({
    photos,
}) => {
    if (!photos.length) {
        return null;
    }

    const [ indexActivePhoto, setIndexActivePhoto ] = useState(0);

    return (
        <div className={style.wolfGallery}>
            <div className={style.wolfGalleryContainer}>

            </div>
            <div className={style.wolfGalleryWrapper}>
                <ul className={style.wolfGalleryTrack}>
                    {photos.map((photo) => (
                        <li
                            key={photo.id}
                            className={style.wolfGalleryPreview}
                        >
                            <img
                                src={photo.src}
                                alt={photo.description}
                                loading="lazy"
                                className={style.wolfGalleryPreview}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}