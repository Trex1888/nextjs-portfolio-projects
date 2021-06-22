import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

function Projects() {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((yem, i) => (
          <BlogCard key={i}>
            <Img src={yem.image} alt="img" />
            <TitleContent>
              <HeaderThree>{yem.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{yem.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {yem.tags.map((tag, i) => {
                  return <Tag key={i}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={yem.visit} target="_blank" rel="noreferrer">
                Web Page
              </ExternalLinks>
              <ExternalLinks href={yem.source} target="_blank" rel="noreferrer">
                GitHub
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;
