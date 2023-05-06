import { StyledDesigned, StyledTitle, StyledDesignedTextWrapper, StyledDesignedTextBox, StyledSubTitle, StyledDesc, StyledFlexRow, StyledBackgroundImg } from "./StyledDesigned";
import Img from "../../images/illustration-editor-desktop.svg";

const Designed: React.FC = () => {
  return (
    <StyledDesigned>
      <StyledTitle>Designed for the future</StyledTitle>
      <StyledFlexRow>
        <StyledDesignedTextWrapper>
          <StyledDesignedTextBox>
            <StyledSubTitle>Introducing an extensible editor</StyledSubTitle>
            <StyledDesc>
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
            </StyledDesc>
          </StyledDesignedTextBox>
          <StyledDesignedTextBox>
            <StyledSubTitle>Robust content management</StyledSubTitle>
            <StyledDesc>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this
              functionality, you’re in full control.
            </StyledDesc>
          </StyledDesignedTextBox>
        </StyledDesignedTextWrapper>
        <StyledBackgroundImg>
          <img src={Img} alt="" />
        </StyledBackgroundImg>
      </StyledFlexRow>
    </StyledDesigned>
  );
};

export default Designed;
