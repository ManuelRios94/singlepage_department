import styled from 'styled-components';
import BackgroundImg from "../../assets/img/Background.jpg";

export const BodyContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    background-image: url(${BackgroundImg});
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
BodyContainer.displayName = BodyContainer;

export const Space = styled.div`
    padding-bottom: 100px;
`
Space.displayName = Space;