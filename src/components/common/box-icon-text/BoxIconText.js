import {BoxIconTextContainer, IconContainer, Text} from "./style";


const BoxIconText = ({text, children}) => {
    return (
        <BoxIconTextContainer>
            <IconContainer>
                {children}
            </IconContainer>
            <Text>
                {text}
            </Text>
        </BoxIconTextContainer>
    );
  }
  
export default BoxIconText;