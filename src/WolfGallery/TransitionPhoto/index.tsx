import cl from 'classnames';

import { Photo, CommonClassProps } from '../types';

import style from './index.module.scss';

interface TransitionPhotoProps extends CommonClassProps {
    prevPhoto?: Photo;
    currentPhoto: Photo;
    nextPhoto?: Photo;
}

export const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
    prevPhoto,
    currentPhoto,
    nextPhoto,
    className,
}) => {
    return (
        <div
            className={cl(style.transitionPhoto, className)}
        >
            {prevPhoto && (
                <img
                    className={style.transitionPhotoImagePrev}
                    src={prevPhoto.src}
                    alt={prevPhoto.description}
                />
            )}
            <img
                className={style.transitionPhotoImage}
                src={currentPhoto.src}
                alt={currentPhoto.description}
            />
            {nextPhoto && (
                <img
                    className={style.transitionPhotoImageNext}
                    src={nextPhoto.src}
                    alt={nextPhoto.description}
                />
            )}
        </div>
    );
}
