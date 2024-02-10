import 'react';
import style from './Title.module.scss';

interface titleProps {
    title: string
}

export const Title = (props: titleProps) => {
    return (<p className={style.title}>
        {props.title}
    </p>)
}