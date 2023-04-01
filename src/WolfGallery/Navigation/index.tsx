import cl from 'classnames';

import { CommonClassProps } from '../types.ts';

import style from './index.module.scss';

interface NavigationProps extends CommonClassProps {
    disabledPrev?: boolean;
    disabledNext?: boolean;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
    disabledPrev,
    disabledNext,
    className,
    onPrevClick,
    onNextClick,
}) => {
    return (
        <div className={cl(style.navigation, className)}>
            <button
                disabled={disabledPrev}
                className={cl(
                    style.navigationBtn,
                    style.navigationBtnLeft,
                )}
                onClick={onPrevClick}
            >
                Previous
            </button>
            <button
                disabled={disabledNext}
                className={cl(
                    style.navigationBtn,
                    style.navigationBtnRight,
                )}
                onClick={onNextClick}
            >
                Next
            </button>
        </div>
    );
}