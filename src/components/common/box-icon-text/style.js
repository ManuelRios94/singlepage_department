import styled from 'styled-components';

export const BoxIconTextContainer = styled.div`
    display: flex;
    align-items: flex-end;
    
    @media (max-width: 765px) {
        align-items: flex-start;
    }
    padding-top: 10px;
`
BoxIconTextContainer.displayName = BoxIconTextContainer;

export const IconContainer = styled.div`
    padding-right: 15px;
`
IconContainer.displayName = IconContainer;

export const Text = styled.p`
    font-weight: 600;
`
Text.displayName = Text;

export const TextLink = styled.p`
    font-weight: 600;
`
TextLink.displayName = TextLink;