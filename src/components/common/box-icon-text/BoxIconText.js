import {BoxIconTextContainer, IconContainer, Text, TextLink} from "./style";


const BoxIconText = ({text, link = null, children}) => {
    return (
        <BoxIconTextContainer>
            <IconContainer>
                {children}
            </IconContainer>
            {
                link !== null ?
                <TextLink >
                    <a href={link}>{text}</a>
                </TextLink>
                :
                <Text>
                    {text}
                </Text>
            }
        </BoxIconTextContainer>
    );
  }
  
export default BoxIconText;