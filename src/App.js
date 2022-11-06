import "./App.css";
import { AboutSection } from "./components/About/About";
import ContactForm from "./components/Contact/Contact";
import GitCalender from "./components/Git/GitCalender";
import GitStats from "./components/Git/GitStats";
import SplitScreen from "./components/Hero/Hero";
import Simple from "./components/Navbar/Navbar";
import { ProjectsSection } from "./components/Project/Project";
import { SkillsSection } from "./components/Skill/SkillsSection";

function App() {
  return (
    <div className="App">
      <Simple />

      <SplitScreen />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <GitCalender />

      <GitStats />

      <ContactForm />
    </div>
  );
}

export default App;
