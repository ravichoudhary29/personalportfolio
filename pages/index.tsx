import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

type Props ={
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const inter = Inter({ subsets: ["latin"] });

const Home = ({ pageInfo, experiences, skills, socials, projects }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scroll-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
      <Head>
        <title>Ravi Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />
      {/*  Hero*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="conatact" className="snap-start">
        <ContactMe />
        {/* Contact Me */}
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer hover:scale-125 "
              src="https://cdn-icons-png.flaticon.com/512/44/44603.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // -When a request comes in
    // -At most every 10 seconds

    revalidate: 10,
  };
};
