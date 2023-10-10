import styled from 'styled-components';

export const CartContainer = styled.div`
    margin: 50px;
`
export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 50px;
`
export const StyledCartItem = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
`

export const CartItemLeft = styled.div`
    .add-remove {
        display: flex;
        gap: 5px;
    }

    .plus-minus {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

`

export const CartItemRight = styled.div`
    img {
        width: 200px;
        aspect-ratio: 1;
        object-fit: cover;
    }
`