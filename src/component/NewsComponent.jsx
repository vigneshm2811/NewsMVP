import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types'

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  apiKeys1 = '76f913c3e3c441b38a55d6be51067b23'
  apiKeys2 = '5492d15efa364a81b2dfb08126dc1dd4'
  apiKeys3 = '6a9bb9c1acf648138ec02d9b79f533ff'
  apiKeys4 = '7a2b71b9500a4c0d882ebd629c85a7c0'
  articles = [];

  constructor() {
    super();
    console.log("component");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKeys1}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30)
    let data = await fetch(url);
    let newdata = await data.json();
    console.log(newdata);
    this.props.setProgress(60)

    this.setState({
      articles: newdata.articles,
      totalResults: newdata.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }
 
  
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKeys1}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  setTimeout(async() => {
    this.setState({ loading: true });
    let data = await fetch(url);
    let newdata = await data.json();
    console.log(newdata);
    this.setState(()=>({
      // articles: [...prevState.articles, ...newdata.articles],
      articles: this.state.articles.concat(newdata.articles),
      totalResults: newdata.totalResults,
    }));
  }, 1500);
  };
   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    return (
      <>
      
        <div className="container newsContainer">
          <h1 className="text-center my-4">Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Loader/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            // hasMore ={true}
            loader={<Loader/>}
            // scrollableTarget="scrollableDiv"
          >
        <div className="container">
          <div className="row">
              {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3" key={e.url}>
                    <NewsItems
                      title={e.title ? e.title.slice(0, 45) : ""}
                      discription={
                        e.description ? e.description.slice(0, 88) : ""
                      }
                      imageUrl={e.urlToImage}
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
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
