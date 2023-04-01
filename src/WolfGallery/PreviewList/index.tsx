import cl from 'classnames';

import { Photo, CommonClassProps } from '../types.ts';

import style from './index.module.scss';

interface PreviewListProps extends CommonClassProps {
    photos: Photo[],
}

export const PreviewList: React.FC<PreviewListProps> = ({
    photos,
    className
}) => {
    if (!photos.length) {
        return null;
    }

    return (
        <div className={cl(style.previewList, className)}>
            <ul className={style.previewListTrack}>
                {photos.map((photo) => (
                    <li
                        key={photo.id}
                        className={style.previewListPreview}
                    >
                        <img
                            src={photo.src}
                            alt={photo.description}
                            loading="lazy"
                            className={style.previewListImage}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}