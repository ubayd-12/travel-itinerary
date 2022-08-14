import styled from "styled-components";


export const Form = styled.form`

    background-color: white;
    border: 1px #707070 solid;
    padding: 20px;
    font-size: 18px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .payment-methods {

        border-bottom: 1px #707070 solid;
        width: fit-content;

    }

    .payment-methods span {

        margin: 0 10px;
        font-size: 18px;
        font-weight: 200;
        cursor: pointer;

    }

    .payment-methods .active {

        color: #2E87EF;

    }

    .payment-input-field {

        margin: 10px 0;

    }

    .payment-input-field label {

        display: block;
        margin-bottom: 5px;

    }

    .payment-input-field select {

        height: 36px;
        width: fit-content;

    }

    input {

        border: 1px grey solid;
        padding: 0px 10px;
        font-size: 19px;
        font-weight: 100;
        height: 35px;

    }

    input::placeholder {

    font-weight: 100;
    font-size: 17px;

    }

    .name-on-card-input {

        width: 350px;

    }

    .card-number-input {

        font-size: 15px;

    }

    .card-expiration-input {

        width: 50px;
        font-size: 15px;
        margin-left: 5px;

    }
`;