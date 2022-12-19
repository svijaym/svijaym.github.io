import "./App.css";
import AboutMe from "./components/About/About";
import ContactForm from "./components/Contact/Contact";
import GitCalender from "./components/Git/GitCalender";
import GitStats from "./components/Git/GitStats";
import Main from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ProjectsSection } from "./components/Project/Project";
import { SkillsSection } from "./components/Skill/SkillsSection";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Main />

      <AboutMe />

      <SkillsSection />

      <ProjectsSection />

      <GitCalender />

      <GitStats />

      <ContactForm />
    </div>
  );
}

export default App;
