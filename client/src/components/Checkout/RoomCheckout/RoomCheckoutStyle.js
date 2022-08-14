import styled from "styled-components";

export const Container = styled.div`

    @media screen and (max-width: 675px) {
        
        display: grid;
        grid-template-rows: 1fr;

    }

    .room-num {

        font-weight: 100;
        display: inline;
        margin-right: 5px;

    }

    .room-details {

        color:#4B4B4B;

    }

    @media screen and (max-width: 675px) {
        
        .room-num {

            margin: 10px 0;

        }

        .room-details {

            margin: 10px 0;

        }

    }

    .adult-num {

        margin: 10px 10px 10px 50px;
        font-weight: 200;

    }

    form {

        margin: 10px 10px 10px 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;

    }

    @media screen and (max-width: 1060px) {
        
        form {

            display: inline;

        }

    }

    form div {

        margin: 10px;

    }

    form h3 {

        font-weight: 100;

    }

    form input, label {
        display: block;
    }

    form label {

        font-size: 18px;
        color:#4B4B4B;
        margin-bottom: 5px;

    }

    form input {

        border: 1px grey solid;
        width: 70%;
        height: 45px;
        padding: 0px 10px;
        font-size: 19px;
        font-weight: 100;

    }

    input::placeholder {

        font-weight: 100;
        font-size: 17px;

    }

`;