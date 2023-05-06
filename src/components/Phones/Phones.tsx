import { StyledPhones, StyledImg, StyledTitle, StyledDescription, StyledTextWrapper } from "./StyledPhone";
import phones from "../../images/illustration-phones.svg";

const Phones: React.FunctionComponent = () => {
  return (
    <StyledPhones>
      <StyledImg>
        <img src={phones} alt="Phones" />
      </StyledImg>
      <StyledTextWrapper>
        <StyledTitle>State of the Art Infrastructure</StyledTitle>
        <StyledDescription>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are,
          keeping your site competitive.
        </StyledDescription>
      </StyledTextWrapper>
    </StyledPhones>
  );
};

export default Phones;
