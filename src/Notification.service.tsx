import React from 'react';

import  styled  from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { Colors, lightenDarkenColor } from './loaders/utilities';
import copy from './assets/copied.svg';


const breakpoints: number[] = [780];
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);



const CreateNotification = (message: string, openState: boolean) => {
    let open = openState;

    const Anim = keyframes`
        0% {
            transform: translateY(-5.5em);
        }
        100% {
            transform: translateY(1.5em);
        }
    `;

    const SmallAnim = keyframes`
        0% {
            transform: translateY(-5.5em);
        }
        100% {
            transform: translateY(0em);
        }
    `;

    const Div = styled('div')`
        width: 100%;
        display: flex;
        justify-content: center;
    `;

    const Notification = styled('div')`
        position: fixed;
        transform: translateY(-5.5em);
        width: 25em;
        height: 4em;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${Colors.Purple};
        background-color: #ffffff;
        font-weight: 500;
        font-family: 'IBM Plex Serif', serif;
        box-shadow: 0px 0px 5px 5px ${lightenDarkenColor(Colors.Main, 190)};
        animation: ${Anim} .4s ease-in-out forwards;
        animation-play-state: ${open ? 'running' : 'paused'};
        z-index: 100;

        img {
            width: 7%;
            margin-left: .5em;
        }

        span {
            margin-left: .5em;
        }

        ${mq[0]} {
            width: 100%;
            animation: ${SmallAnim} .4s ease-in-out forwards;
            animation-play-state: ${open ? 'running' : 'paused'};
        }
    `;

    return (
        <Div>
            <audio src={require('./assets/notificationSound.mp3')} autoPlay={open}></audio>
            <Notification>
                <img src={copy} alt="Bell Icon"/>
                <span>{message}</span>
            </Notification>
        </Div>
    )
}


export default CreateNotification;