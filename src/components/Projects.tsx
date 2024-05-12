import portfolio from "../assets/portfolio.jpeg";
import foodinfini from "../assets/foodinfini.jpeg";
import utube from "../assets/utube.jpeg";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="border-b bg-cream border-orange justify-between w-full px-6 md:px-16"
      >
        <h1 className="w-full text-center border-x border-orange font-extrabold text-3xl py-10">
          Projects
        </h1>
        <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full px-16 py-10">
          <div className="flex justify-center w-full relative flex-wrap gap-10">
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={portfolio} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className="font-semibold">Portfolio</h3>
                <a href="" target="_blank" className="hover:text-red-500">
                  <FaExternalLinkAlt />
                </a>
                <a href="" target="_blank" className="hover:text-red-500">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={foodinfini} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className=" font-semibold">FoodInfini</h3>
                <a
                  href="https://foodinfini.netlify.app/"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/Ajay481/FoodInfini"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="min-w-60 max-w-96 border border-black rounded-lg flex flex-col justify-between items-baseline">
              <img src={utube} className="w-full h-full" />
              <div className="flex gap-10 justify-between w-full p-6 ">
                <h3 className=" font-semibold">UTube</h3>
                <a
                  href="https://utube-app-11.netlify.app/"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/Ajay481/uTube"
                  target="_blank"
                  className="hover:text-red-500"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
