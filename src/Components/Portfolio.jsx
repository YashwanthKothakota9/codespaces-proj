/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/third.jpeg";

const imageAltText = "programmer's desk with laptop, coffee, and notebook";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Trello clone 🎉",
    description:
      "A Trello clone built with Nextjs 13 and React DnD. This was a fun project to build and I learned a lot about React DnD.",
    url: "https://trello-clone-alpha-nine.vercel.app/",
  },
  {
    title: "AI prompter",
    description:
      "An AI prompter to create and share prompts. This was built with Nextjs 13, Tailwind CSS, NextAuth, and MongoDB.",
    url: "https://nextjs-prompter.vercel.app/",
  },
  {
    title: "Game Hub Site",
    description:
      "Created from Coding with Mosh React course. This was a great course to learn React and I learned a lot about React Hooks. This was built using React and RAWG API",
    url: "https://game-hub-react-zeta.vercel.app/",
  },
  {
    title: "Todo App",
    description:
      "Simple Todo App built using React and Tailwind CSS. This was a fun project to build and I learned a lot about React Hooks.",
    url: "https://todo-react-ts-app-inky.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
