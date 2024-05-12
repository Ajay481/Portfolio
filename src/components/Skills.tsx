import Card from "./Card";
import CssIcon from "../assets/css-3.svg";
import HTMLIcon from "../assets/html-1.svg";
import JavascriptIcon from "../assets/logo-javascript.svg";
import ReactIcon from "../assets/react-2.svg";
import NextIcon from "../assets/nextjs.svg";
import ReduxIcon from "../assets/redux.svg";
import StyledComponentsIcon from "../assets/styledcomponents.svg";
import GIthubIcon from "../assets/github-icon-1.svg";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="border-b bg-cream border-orange justify-between w-full h-full px-6 md:px-16"
      >
        <h1 className="w-full text-center border-x border-orange font-extrabold text-3xl py-10">
          My Skills
        </h1>
        <div className="border-x border-orange flex justify-around flex-wrap-reverse w-full h-full px-16 py-10">
          <div className="flex justify-center  w-full relative flex-wrap gap-10">
            <Card
              children={
                <div>
                  <img
                    src={HTMLIcon}
                    className="w-20 h-20 flex justify-center"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    HTML
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={CssIcon}
                    className="w-20 h-20 flex justify-center"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    CSS
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={JavascriptIcon}
                    className="w-full h-20 flex justify-end"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    JAVASCRIPT
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={ReactIcon}
                    className="w-20 h-20 flex justify-center"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    React
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={NextIcon}
                    className="w-20 h-20 flex justify-end"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    NEXT JS
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={ReduxIcon}
                    className="w-full h-20 mx-auto"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    REDUX TOOLKIT
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={StyledComponentsIcon}
                    className="w-full h-20 flex justify-end"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    STYLED COMPONENTS
                  </h1>
                </div>
              }
            />
            <Card
              children={
                <div>
                  <img
                    src={GIthubIcon}
                    className="w-full h-20 flex justify-end"
                    loading="lazy"
                  />
                  <h1 className="w-full text-center pt-10 font-Bungee text-2xl">
                    GIT & GITHUB
                  </h1>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
