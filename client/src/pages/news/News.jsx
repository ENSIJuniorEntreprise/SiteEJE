import { RightArticle } from "./RightArticle";
import { bannerImg, image } from "../../assets/file";

import Button from "./Button";
import Search from "./Search";
import FirstHighlight from "./FirstHighlight";
import Banner from "./Banner";
import { useState } from "react";
export function News() {
  let article0 = {
    cover: `${image}`,
    publishedAt: "August 30, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article1 = {
    cover: `${image}`,
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article2 = {
    cover: `${image}`,
    publishedAt: "june 24, 2025",
    title: "yasmine",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article3 = {
    cover: `${image}`,
    publishedAt: "January 15, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article4 = {
    cover: `${image}`,
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article5 = {
    cover: `${image}`,
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article6 = {
    cover: `${image}`,
    publishedAt: "January 15, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article7 = {
    cover: `${image}`,
    publishedAt: "July 24, 2020",
    title: "Lorem ipsum dolor",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  let article8 = {
    cover: `${image}`,
    publishedAt: "July 24, 2020",
    title: "Ceci est pour tester",
    shortDescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugit veniam et consequuntur ad corrupti! Ipsam minima, eos eaque in obcaecati odit ducimus veritatis laudantium necessitatibus? Et est totam aspernatur",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3; // Choisissez le nombre d'articles par page
  const totalArticles = [
    article0,
    article1,
    article2,
    article3,
    article4,
    article5,
    article6,
    article7,
    article8,
  ];

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = totalArticles.slice(startIndex, endIndex);

  return (
    <div>
      <div className="news  bg-[#1F2029]">
        <Banner />
        <FirstHighlight {...article0} />

        <div
          style={{ maxWidth: "70%", margin: "20px auto" }}
          className="sm:max-w-full"
        >
          <h1 className="text-[#2DA2DD] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-montserrat ">
            Discover
          </h1>
          <h1 className="text-[#DFDED2F7] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat">
            Our latest news
          </h1>
          <br />
          <div className="bg-[#2DA2DD] h-1 w-[100px] sm:w-[200px] mb-4"></div>
        </div>

        <Search />
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            {/*<RightArticle reverse={false}/>*/}
            {displayedArticles.map((article, index) => (
              <RightArticle
                key={index}
                {...article}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        <br />
        <br />
        <Button
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalPages={Math.ceil(totalArticles.length / articlesPerPage)}
        />

        <br />
        <br />
      </div>
    </div>
  );
}
