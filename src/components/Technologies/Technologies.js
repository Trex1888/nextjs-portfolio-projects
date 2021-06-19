import {
  DiJavascript,
  DiHtml5,
  DiReact,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

function Technologies() {
  return (
    <Section id="tech">
      {/* <br /> */}
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        React and Nextjs are top-notch web development services.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiHtml5 size="3em" />
            <DiReact size="3em" />
          </picture>

          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React & Nextjs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiJavascript size="3em" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React & Nextjs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiMongodb size="3em" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React & Nextjs
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
}

export default Technologies;
