import { DiMongodb, DiReact, DiJava } from "react-icons/di";
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
    <Section id="skills">
      <SectionDivider divider />

      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        Nextjs takes your projects to another level. Nextjs enhances React with
        server-side rendering, route pre-fetching, and more.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3em" />
          </picture>

          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML CSS JavaScript <br />
              React Redux Nextjs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiMongodb size="3em" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              MongoDB Express <br />
              React Nodejs SQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiJava size="3em" />
          </picture>
          <ListContainer>
            <ListTitle>OOP & Hosting</ListTitle>
            <ListParagraph>
              Java C# Android <br />
              GitHub Firebase AWS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider />
    </Section>
  );
}

export default Technologies;
