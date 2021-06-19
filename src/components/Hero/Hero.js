import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

function Hero() {
  return (
    <Section>
      <LeftSection>
        <SectionTitle main center>
          Welcome To My <br />
          Nextjs Portfolio
        </SectionTitle>
        <SectionText>
          React with Nextjs and Tailwind CSS take projects to the next level.
          They say it takes 10,000 of practice before you can be considered an
          expert at something... So LETS CODE!
        </SectionText>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
