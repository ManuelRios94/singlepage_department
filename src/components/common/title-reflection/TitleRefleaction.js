import {TitleReflectionContainer, TitleReflectionH1} from "./style";

const TitleRefleaction = ({text}) => {
    return (
        <TitleReflectionContainer>
            <TitleReflectionH1 aria-label={text}/>
        </TitleReflectionContainer>
    );
  }
  
export default TitleRefleaction;