import Skill from "./components/skills.js"
import AboutMe from "./components/aboutMe.js";
import Project from "./components/project.js";
export default function Home() {
  return (
    <main>
      <AboutMe/>
      <Skill/>
      <Project/>
    </main>
  );
}
