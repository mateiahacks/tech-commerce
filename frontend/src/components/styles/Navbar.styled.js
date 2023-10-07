import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    padding: 0 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    position: relative;

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
`