import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    padding: 0 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 20px 0px;

    .mySelect__value-container{
        height: -80px;
        }

    div {
        padding: 15px;
    }

    .navbar-left {
    }

    .cart-icon, .user-icon, .logout-icon {
        cursor: pointer;
    }

    .navbar-mid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .navbar-right {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .cart-icon-container {
        position: relative;
    }

    .cart-count {
        position: absolute;
        font-size: 10px;
        background-color: black;
        color: white;
        padding: 0;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        top: 13px;
        right: 8px;
    }
`