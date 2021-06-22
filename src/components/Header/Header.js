import Link from "next/link";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

function Header() {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "10px",
            }}
          >
            <DiCssdeck size="2em" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#education">
            <NavLink>Education</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/trex1888">
          <AiFillGithub size="3em" />
        </SocialIcons>
        <SocialIcons href="https://github.com/trex1888">
          <AiFillYoutube size="3em" />
        </SocialIcons>
        <SocialIcons href="https://github.com/trex1888">
          <AiFillTwitterCircle size="3em" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
