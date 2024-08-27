import Skill from "./components/skills/skills.js"
import AboutMe from "./components/aboutMe/aboutMe.js";
import Project from "./components/project/project.js";
export default function Home() {
  return (
    <main>
      <AboutMe/>
      <Skill/>
      <Project/>
    </main>
  );
}
