import cl from 'classnames';

import { Photo, CommonClassProps } from '../types.ts';

import style from './index.module.scss';

interface MainPhotoProps extends CommonClassProps {
    photo: Photo,
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
    photo,
    className,
}) => {
    return (
        <div className={cl(style.mainPhoto, className)}>
            <img
                className={style.mainPhotoImage}
                src={photo.src}
                alt={photo.description}
            />
        </div>
    )
}