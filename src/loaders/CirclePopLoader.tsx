import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes} from '@emotion/core';

import { Colors } from './utilities';
import LoaderBox from './wrapper';


export interface CirclePopProps {
    loading: boolean;
    size?: number;
    pause?: boolean;
    duration?: number;
    colors?: string[];
}

const dProps = {
    loading: true,
    size: 120,
    duration: 1,
    colors: [ Colors.Purple, Colors.Yellow ]
}


const CirclePopLoader = (props: CirclePopProps) => {

    const {
        loading,
        size,
        pause,
        duration,
        colors,
    } = props;

    const Pop1 = keyframes`
        0%, 70% {
            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
            transform: scale(0);
        }
        100% {
            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
            transform: scale(1);
        }
    `;

    const Pop2 = keyframes`
        0%, 40% {
            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
            transform: scale(0);
        }
        100% {
            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
            transform: scale(1);
        }
    `;

    const Pop3 = keyframes`
        0%, 10% {
            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
            transform: scale(0);
        }
        100% {
            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
            transform: scale(1);
        }
    `;

    const Center = styled('div')`
        position: absolute;
        width: inherit;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const Circle1 = styled('div')`
        position: absolute;
        z-index: 3;
        width: 14%;
        height: 14%;
        border: ${colors ? `1px solid ${colors[1]}` : `1px solid ${dProps.colors[1]}`};
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-radius: 50%;
        animation: ${Pop1} ${duration ? duration : dProps.duration}s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
        animation-fill-mode: both;
    `;

    const Circle2 = styled('div')`
        position: absolute;
        z-index: 2;
        width: 27%;
        height: 27%;
        border: ${colors ? `1px solid ${colors[1]}` : `1px solid ${dProps.colors[1]}`};
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-radius: 50%;
        animation: ${Pop2} ${duration ? duration : dProps.duration}s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
        animation-fill-mode: both;
    `;

    const Circle3 = styled('div')`
        position: absolute;
        z-index: 1;
        width: 41%;
        height: 41%;
        border: ${colors ? `1px solid ${colors[1]}` : `1px solid ${dProps.colors[1]}`};
        background: ${colors ? `${colors[0]}` : `${dProps.colors[0]}`};
        border-radius: 50%;
        animation: ${Pop3} ${duration ? duration : dProps.duration}s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
        animation-play-state: ${pause ? 'paused' : 'running'};
        animation-fill-mode: both;
    `;

    return (
        <LoaderBox size={size} loading={loading} dPropsSize={dProps.size}>
            <Center>    
                <Circle1></Circle1>
                <Circle2></Circle2>
                <Circle3></Circle3>
            </Center>
        </LoaderBox>
    )
}



export default CirclePopLoader;