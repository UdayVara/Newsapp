import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Loader from "./Loader.js";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export default function Newscomponent(props) {
  // ;this are default props when props are not passed

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  // capitalize function which is used to capitalize news category name
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // fetchmore data is used to fetch more articles while scrolling
  const fetchMoreData = async () => {
    setPage(page + 1);
    document.title = `${props.title} - ${capitalize(props.category)}`;
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1
      }&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotal(parsedData.totalResults);


  }

  // this fucntion will update articles 
  const updateArticle = async (pageNumber) => {
    props.setLoading(10);
    setLoading(true);
    props.setLoading(20);
    document.title = `${props.title} - ${capitalize(props.category)}`;
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${pageNumber
      }&pagesize=${props.pagesize}`;
    props.setLoading(40);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setLoading(80);
    setArticles(parsedData.articles);
    setTotal(parsedData.totalResults);
    setLoading(false);

    props.setLoading(100);
    // console.log(this.state.loading);

  }
  // this will be used for opening web for first time

  useEffect(() => {
    updateArticle(1);
  }, [])
  return (
    <>

      <div className="container mx-auto">
        <h2 className={`h2 mb-md-4 mt-5 text-center text-${props.bgMode === "light" ? "dark" : "light"}`}>
          {props.title} - {capitalize(props.category)} headlines{" "}
        </h2>

        {loading && <Loader />}

        <div className="row my-3 mx-auto">
          {!loading && articles.map((element) => (
            <div className="col-md-5 mx-auto" key={element.url}>
              <Newsitem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imgUrl={
                  element.urlToImage ? element.urlToImage : "imguna.png"
                }
                newsUrl={element.url}
                bgMode={props.bgMode}
                author={element.author}
                date={element.publishedAt}
              />
            </div>

          ))}
          {/* thsi is infinity scrolling component*/}
          <InfiniteScroll
            //  this is length of aritcles total loaded currntly
            dataLength={articles.length}
            // this will fetch more news based when this is scrolled
            next={fetchMoreData}
            // condition for end of data
            hasMore={articles.length !== total}
            // loading component
            loader={<Loader />}
          ></InfiniteScroll>
        </div>

      </div>
    </>
  );
}

Newscomponent.defaultProps = {
  pagesize: 6,
  country: "in",
  category: "general",
  page: 1
}
// this is for data type of props that we passed
Newscomponent.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.number
}