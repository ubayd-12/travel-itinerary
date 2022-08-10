import styled from "styled-components"

export const Nav = styled.div`

    background-color: ${props => props.bg || "white"};

    img {
        width: 250px;
    }

    button {

        border: 1px red solid;

    float: right;
    width: 8rem;
    height: 3.5rem;
    border-radius: 2em;
    font-size: 20px;
    color: white;
    background-color: rgb(84,165,228);
    border: 1px rgb(83,166,228, 0.0) solid;
    font-family: century-gothic,sans-serif;
    font-weight: 400;
    font-style: normal;
    cursor: pointer;
    transition: 0.3s background-color ease;
    margin: 15px;

    &:hover {
        background-color: rgb(83,166,228, 0.1);
        border: 1px rgb(83,166,228) solid;
        transition: 0.3s background-color ease;
    };

    }

`;