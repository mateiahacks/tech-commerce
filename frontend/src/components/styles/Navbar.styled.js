import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    padding: 0 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    div {
        padding: 15px;
    }

    .navbar-left {

    }

    .cart-icon, .user-icon {
        cursor: pointer;
    }

    .navbar-mid {

    }

    .navbar-right {
        display: flex;
        align-items: center;
        gap: 20px;
    }
`