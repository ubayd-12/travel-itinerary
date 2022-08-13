import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;
    font-family: century-gothic,sans-serif;
    font-weight: 400;
    font-style: normal;

    section {
        margin: 30px 0;
    }

    h3 {

        font-size: 1.5em;

    }

    form {

        margin-top: 15px;

    }

    @media screen and (max-width: 675px) {
        
        form {
            margin-top: 5px;
        }

        section {

            margin: 15px 0;

        }

        h3 {

            font-size: 1em;

        }

    }

`;

export const Value = styled.span`

    color:rgb(98, 98, 98);

`;

export const Button = styled.button`

    border-radius: 100%;
    background-color: rgb(255, 255, 255);
    border: 1px rgb(98, 98, 98) solid;
    margin: 0 5px;

`;