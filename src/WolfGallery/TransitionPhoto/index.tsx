import { useRef, useMemo, useState, useLayoutEffect } from 'react';
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
    const refMainPhoto = useRef<HTMLImageElement | null>(null);
    const refPrevPhoto = useRef<HTMLImageElement | null>(null);
    const refNextPhoto = useRef<HTMLImageElement | null>(null);

    const refsToTimeouts = useRef([0, 0, 0]);
    const [ showedPhotos, setShowedPhotos ] = useState([
        prevPhoto,
        currentPhoto,
        nextPhoto,
    ]);

    useLayoutEffect(() => {
        // Hide current photo
        if (showedPhotos[1]?.id !== currentPhoto.id) {
            refMainPhoto.current!.style.opacity = '0';
        }

        // Show prev photo
        if (showedPhotos[0]?.id === currentPhoto.id) {
            refPrevPhoto.current!.style.opacity = '1';
        }

        // Show next photo
        if (showedPhotos[2]?.id === currentPhoto.id) {
            refNextPhoto.current!.style.opacity = '1';
        }

        setTimeout(() => {
            setShowedPhotos([prevPhoto, currentPhoto, nextPhoto])
            refMainPhoto.current!.style.opacity = '1'
        }, 200);
    }, [ currentPhoto ]);

    return useMemo(() => (
        <div className={cl(style.transitionPhoto, className)}>
            {prevPhoto && (
                <img
                    className={style.transitionPhotoImagePrev}
                    src={prevPhoto.src}
                    alt={prevPhoto.description}
                    ref={refPrevPhoto}
                />
            )}
            <img
                className={style.transitionPhotoImage}
                src={currentPhoto.src}
                alt={currentPhoto.description}
                ref={refMainPhoto}
            />
            {nextPhoto && (
                <img
                    className={style.transitionPhotoImageNext}
                    src={nextPhoto.src}
                    alt={nextPhoto.description}
                    ref={refNextPhoto}
                />
            )}
        </div>
    ), [showedPhotos[0]?.id]);
}
