import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/about/About";
import { Projects } from "../components/sections/projects/Projects";
import { Experience } from "../components/sections/experience/Experience";
import { Education } from "../components/sections/education/Education";
import { Contact } from "../components/sections/contact/Contact";
import { FadeSection } from "../components/ui/FadeSection";

const Home = () => {
    return (
        <>
            <FadeSection><Hero /></FadeSection>
            <FadeSection><About /></FadeSection>
            <FadeSection><Projects /></FadeSection>
            <FadeSection><Experience /></FadeSection>
            <FadeSection><Education /></FadeSection>
            <FadeSection><Contact /></FadeSection>
        </>
    );
};

export default Home;