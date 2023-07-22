//Your API key is: 139918bc6aa3472ab9108f95656cc393

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComp extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async updation() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=139918bc6aa3472ab9108f95656cc393&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedata = await data.json();
    this.props.setProgress(50);

    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updation();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=139918bc6aa3472ab9108f95656cc393&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="scrollbarconatiner">
          <h1 className="text-center" style={{ margin: "70px 0px" }}>
            NewsX -Todays {this.props.category} Headlines
          </h1>
          {/* {this.state.loading && <Spinner />} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((ele, index) => {
                  return (
                    <div className="col-md-4 col-sm-12 colo-lg-4" key={index}>
                      <NewsItem
                        title={ele.title ? ele.title.slice(0, 50) : null}
                        description={
                          ele.description ? ele.description.slice(0, 70) : null
                        }
                        imageUrl={ele.urlToImage}
                        newsUrl={ele.url}
                        author={ele.author ? ele.author : "unknown"}
                        date={ele.publishedAt}
                        source={ele.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default NewsComp;
