import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import WorkExperience from "../components/WorkExperience";
import { Experience, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import "../styles/Home.module.css";
import { useEffect } from "react";

type Props = {
  // pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ experiences, skills, projects, socials }: Props) => {
  // useEffect(() => {
  //   if (sessionStorage.getItem("reloaded") != null)
  //     window.location.replace("/");
  //   console.log(sessionStorage.getItem);
  // }, []);

  // if (!experiences && !skills && !projects && !socials) {
  //   <div
  //     className="w-12 h-12 rounded-full animate-spin
  //                   border-y-2 border-solid border-blue-500 border-t-transparent"
  //   ></div>;
  // }

  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      <Head>
        <title>Hadeeba - Frontend Dev in London</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header socials={socials} />

      <section
        id="hero"
        className="snap-start duration-300 ease-linear snap-proximity"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="snap-center duration-300 ease-linear snap-proximity"
      >
        <About />
      </section>

      <section
        id="experience"
        className="snap-center duration-300 ease-linear snap-proximity"
      >
        <WorkExperience experiences={experiences} />
      </section>

      <section
        id="skills"
        className="snap-start duration-300 ease-linear snap-proximity"
      >
        <Skills skills={skills} />
      </section>

      <section
        id="projects"
        className="snap-start duration-300 ease-linear snap-proximity"
      >
        <Projects projects={projects} />
      </section>

      <section id="testimonial" className="snap-start snap-smooth">
        <Testimonial />
      </section>

      <section id="contact-me" className="snap-start snap-smooth">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center hover:">
            <Image
              height={40}
              width={40}
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn.sanity.io/images/j1xooykw/production/b5d51b77d7c0ae61b591e21e1827d2d8e9650f86-460x460.jpg"
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
  // const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      // pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    //Next.js will attempt to re-generate the page:
    //- when a request comes in
    //- at most every 1000 seconds
    revalidate: 1000,
  };
};
