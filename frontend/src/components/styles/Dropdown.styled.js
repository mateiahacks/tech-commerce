import styled from 'styled-components';

export const StyledDropdown = styled.div`
    width: 200px;
    height: 50px;
    color: white;
    background-color: var(--primaryGreen);
    padding: 0;
    display: flex;
    align-items: center;
    position: relative;
`
export const DropdownSelector = styled.div`
    width: 100%;
    padding: 5px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
`

export const DropdownList = styled.div`
    position: absolute;
    top: 50px;
    padding: 0;
    left: 0;
    width: 100%;
    background-color: white;
    color: black;

    div {
        width: 100%;
        padding: 5px;
    }

    div:hover {
        background-color: var(--primaryGreen);
        color: white;
        cursor: pointer;
    }
`