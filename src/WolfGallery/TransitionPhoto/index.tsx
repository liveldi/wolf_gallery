import { useRef, useMemo, useLayoutEffect, useState } from 'react';
import cl from 'classnames';

import { Photo, CommonClassProps } from '../types';

import style from './index.module.scss';

interface TransitionPhotoProps extends CommonClassProps {
    indexActivePhoto: number;
    photos: Photo[];
}

type RefT = React.MutableRefObject<HTMLDivElement | null>;
const getPhotoByRef = (ref: RefT, index: number): HTMLElement | null => {
    return ref.current!.querySelector(`img:nth-of-type(${index + 1})`);
}

const hidePhoto = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }

    element.dataset.active = 'false';
}

const showPhoto = (element: HTMLElement | null) => {
    if (!element) {
        return;
    }

    element.dataset.active = 'true';

    if (element.previousSibling) {
        // @ts-ignore
        element.previousSibling.dataset.active = 'preparing';
    }

    if (element.nextSibling) {
        // @ts-ignore
        element.nextSibling.dataset.active = 'preparing';
    }
}

export const TransitionPhoto: React.FC<TransitionPhotoProps> = ({
    photos,
    indexActivePhoto,
    className,
}) => {
    if (!photos.length) {
        return null;
    }

    const [ prevActiveIndexPhoto, setPrevActiveIndexPhoto ] = useState(indexActivePhoto);

    const containerRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        const activePhoto = getPhotoByRef(containerRef, prevActiveIndexPhoto);
        const nextActivePhoto = getPhotoByRef(containerRef, indexActivePhoto);

        if (prevActiveIndexPhoto !== indexActivePhoto) {
            hidePhoto(activePhoto);
            showPhoto(nextActivePhoto);
        } else {
            showPhoto(activePhoto);
        }

        setPrevActiveIndexPhoto(indexActivePhoto);
    }, [ indexActivePhoto ]);

    return useMemo(() => (
        <div
            className={cl(style.transitionPhoto, className)}
            ref={containerRef}
        >
            {photos.map((photo, id) => (
                <img
                    key={photo.id}
                    className={style.transitionPhotoImage}
                    data-active={id === indexActivePhoto}
                    src={photo.src}
                    loading="lazy"
                    alt={photo.description}
                />
            ))}
        </div>
    ), []);
}
