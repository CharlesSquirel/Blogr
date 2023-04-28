import { StyledSubTitle, StyledDesc, StyledDesignedTextBox, StyledDesignedTextWrapper } from "../Designed/StyledDesigned";
import { StyledLaptop, StyledImg } from "./StyledLaptop";
import laptop from "./illustration-laptop-desktop.svg";

const Laptop: React.FC = () => {
  return (
    <StyledLaptop>
      <StyledImg>
        <img src={laptop} alt="Laptop" />
      </StyledImg>
      <StyledDesignedTextWrapper>
        <StyledDesignedTextBox>
          <StyledSubTitle>Free, open, simple</StyledSubTitle>
          <StyledDesc>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax
            highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The
            architecture is clean and is relatively easy to learn.
          </StyledDesc>
        </StyledDesignedTextBox>
        <StyledDesignedTextBox>
          <StyledSubTitle>Powerful tooling</StyledSubTitle>
          <StyledDesc>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </StyledDesc>
        </StyledDesignedTextBox>
      </StyledDesignedTextWrapper>
    </StyledLaptop>
  );
}

export default Laptop;
