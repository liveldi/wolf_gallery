import cl from 'classnames';

import { CommonClassProps } from '../types.ts';

import style from './index.module.scss';

interface NavigationProps extends CommonClassProps {}

export const Navigation: React.FC<NavigationProps> = ({
    className,
}) => {
    return (
        <div className={cl(style.navigation, className)}>
            <button disabled className={cl(
                style.navigationBtn,
                style.navigationBtnLeft,
            )}>
                Previous
            </button>
            <button className={cl(
                style.navigationBtn,
                style.navigationBtnRight,
            )}>
                Next
            </button>
        </div>
    );
}