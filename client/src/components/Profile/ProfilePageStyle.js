import styled from "styled-components";


export const Container = styled.div`

    height: 100vh;

    .grid {
        height: 86vh;
        display: grid;
        grid-template-columns: 2fr 8fr;
        grid-template-areas: "sidebar main";

    }

    .sidebar {
        
        grid-area: sidebar;
        background-color: rgb(237, 237, 237);
        text-align: center;
        position: relative;
    }

    .profile-pic {

        display: flex;
        justify-content: center;
        margin-top: 20px;

    }

    .main {
        grid-area: main;
        margin: 30px 50px;
        position: relative;
    }

    .sidebar .username, .name, .points-text, .points-value {

        margin: 10px 0;

    }

    .sidebar .username, .points-value, .member-since, .anniversary-credit {

        color: rgb(98, 98 ,98);
    
    }

    .sidebar .member-since {

        margin-top: 20px;

    }

    .sidebar .anniversary-credit {

       position: absolute;
       bottom:32px;
       width: 100%;

    }

    .sidebar .anniversary-credit .anniversary-credit-text {

        text-align: center;

    }
    
    .deactivate {

        font-size: 19px;
        color:rgb(255, 3, 3);
        cursor: pointer;
        position: absolute;
        bottom: 0;

    }

    .copyright {

        position: absolute;
        bottom: 0;
        right: 0;
        color: rgb(98, 98 ,98);

    }

    @media screen and (max-width: 675px) {

        .grid {

            grid-template-columns: none;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: "sidebar"
                                 "main";

        }

        .sidebar {

            padding-bottom: 10px;

        }

        .points-value {

            margin:20px 0;

        }
        
        .main {

            text-align: center;

        }

        .deactivate {

            position: static;
            display: block;
            margin-bottom: 10px;
    
        }

        .copyright {

            position: static;
            display: block;
            margin-bottom: 10px;

        }

    }

`

export const SettingSectionContainer = styled.div`

    margin-bottom: 40px;

    h3 {

        font-weight: bold;

    }

    span {

        color: rgb(46,85,225);
        display: block;
        margin: 10px;
        font-size: 18px;
        cursor: pointer;

    }

    .options {

        margin: 0 32px;

    }

`;