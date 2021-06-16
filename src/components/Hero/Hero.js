import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

function Hero({ props }) {
  return (
    <Section>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My <br />
          Nextjs Portfolio
        </SectionTitle>
        <SectionText>
          Coding this project will continue to improve my React skill set and
          Nextjs is amazing! They say it takes 10,000 of practice before you can
          be considered an expert at something... So LETS CODE!
        </SectionText>
      </LeftSection>
    </Section>
  );
}

export default Hero;
