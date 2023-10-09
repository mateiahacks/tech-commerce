import styled from 'styled-components';

export const StyledCreateProduct = styled.div`
    margin: 0 auto;
    display: flex;
    gap: 30px;
    margin-top: 40px;

    textarea {
        height: 180px;
        padding: 10px 14px;
        resize: none;
    }

    @media only screen and (max-width: 800px) {
        & {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

export const ImageUpload = styled.div`
    display: flex;
    flex-direction: column;

    img {
        border: 1px solid gray;
        width: 200px;
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
    }

    @media only screen and (max-width: 800px) {
        & {
            margin-left: 100px;
        }
    }
`