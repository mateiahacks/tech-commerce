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

export const StyledProducts = styled.section`
    width: 100%;
    
`

export const ProductsContainer = styled.div`
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
    margin: 50px;

    .skeleton {
        width: 280px;
        height: 280px;
    }
`

export const StyledProductCard = styled.div`
    width: 300px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 5px;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    

    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        object-position: center;
        margin-bottom: 10px;
    }
`