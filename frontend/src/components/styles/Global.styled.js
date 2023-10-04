import styled from 'styled-components';

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--backgroundColor);
    display: flex;
`

export const Loader = styled.div`
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        }
    }

    width: ${(props) => props.size}px;
    aspect-ratio: 1;
    border: 1px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

`