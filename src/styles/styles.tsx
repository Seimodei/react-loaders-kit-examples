/** @jsx jsx */

import React from 'react';

import  styled  from '@emotion/styled';
import { css, jsx } from '@emotion/core';

import { Colors, lightenDarkenColor } from '../loaders/utilities';


const breakpoints: number[] = [1060, 780, 580];
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);


export const AppWrapper = styled('div')`
    width: 1000px;
    margin: 0 auto;
    font-family: 'Muli', sans-serif;
    color: ${Colors.Main};
    margin-bottom: 5em;

    ${mq[0]} {
        width: 100%;
        padding: 0 .85em;
    }
`;

export const Title = styled('div')`
    width: 100%;
    text-align: center;

    span {
        display: block;
        font-weight: 900;
        font-size: 4em;
        margin-top: .5em;

        ${mq[1]} {
            font-size: 3em;
        }

        ${mq[2]} {
            font-size: 2em;
        }
    }

    p {
        font-family: 'IBM Plex Serif', serif;
        font-weight: 500;
        font-size: 1.01em;
        margin-top: .5em;

        ${mq[2]} {
            font-size: 1em;
        }
    }
`;

export const ButtonWrapper = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3em;

    ${mq[2]} {
        flex-direction: column;
        align-items: center;
        margin-top: 1.8em;
    }
`;

export const GithubButton = styled('a')`
    margin: 0 .8em;
    width: 17em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: ${Colors.Main};
    border: 1px solid ${Colors.Main};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    font-family: 'IBM Plex Serif', serif;
    box-shadow: 0px 0px 5px 0px ${lightenDarkenColor(Colors.Main, 300)};
    transition: all .15s;

    &:hover {
        box-shadow: 0px 3px 10px 1px ${lightenDarkenColor(Colors.Main, 150)};
    }

    ${mq[2]} {
        margin: 0;
        width: 100%;
    }
`;

export const NpmButton = (action:() => void) => {
    const Button = styled('div')`
        margin: 0 .8em;
        width: 17em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${Colors.Purple};
        color: ${Colors.Purple};
        font-weight: 500;
        font-family: 'IBM Plex Serif', serif;
        box-shadow: 0px 0px 5px 0px ${lightenDarkenColor(Colors.Main, 300)};
        cursor: pointer;
        transition: all .15s;

        &:hover {
            background-color: ${lightenDarkenColor(Colors.Purple, 0)};
            color: white;
        }

        ${mq[2]} {
            margin: .5em 0 0 0;
            width: 100%;
            background-color: ${lightenDarkenColor(Colors.Purple, 0)};
            color: white;
        }
    `;


    return (
        <Button onClick={action}>npm i --save react-loaders-kit</Button>
    );
}

export const LoadersWrapper = styled('div')`
    margin-top: 5em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-auto-rows: 50px;
    grid-gap: .5em;
    grid-auto-rows: 100px;

    ${mq[1]} {
        grid-template-columns: 1fr 1fr;
    }

    ${mq[2]} {
        grid-template-columns: 1fr;
        margin-top: 3em;
    }
`;

export const Card = styled('div')`
    position: relative;
    max-width: 100%;
    box-shadow: 0px 0px 5px 0px ${lightenDarkenColor(Colors.Main, 180)};
    border: 1px solid ${lightenDarkenColor(Colors.Purple, 219)};
    margin-top: .1em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    transition: all .15s;

    ${mq[2]} {
        border: 1px solid ${lightenDarkenColor(Colors.Purple, 200)};
    }

    .name {
        position: absolute;
        opacity: 0;
        bottom: -3em;
        transition: all .15s;

        ${mq[2]} {
            bottom: 1em;
            opacity: 1;
        }
    }

    &:hover {
        border: 1px solid ${lightenDarkenColor(Colors.Purple, 1)};

        .name {
            bottom: .4em;
            opacity: 1;
        }

        ${mq[2]} {
            border: 1px solid ${lightenDarkenColor(Colors.Purple, 200)};

            .name {
                bottom: 1em;
                opacity: 1;
            }
        }
    }
`;

export const Code = (name: string) => {
    const codeStyle = css`
        background-color: ${lightenDarkenColor(Colors.Purple, 200)};
        padding: .5em;
    `;

    return (
        <pre css={codeStyle}>
        <code>
            <span>
                <span><span>&lt;</span>{name}</span> <span>/&gt;</span>
            </span>
        </code>
        </pre>
    )
}

export const FooterInfo = styled('footer')`
    font-weight: 600;
    font-family: 'IBM Plex Serif', serif;
    text-align: center;
    margin-bottom: 5em;

    ${mq[2]} {
        font-size: .85em;
        padding: 0 .85em;
        margin-bottom: 2.5em;
    }
`;

export const Footer = styled('footer')`
    width: 100%;

    svg {
        width: 100%;
    }
`;
