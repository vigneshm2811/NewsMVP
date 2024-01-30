import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types'

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

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
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76f913c3e3c441b38a55d6be51067b23&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let newdata = await data.json();
    console.log(newdata);
    this.setState({
      articles: newdata.articles,
      totalResults: newdata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
 
  // nextPage = async() => {
  //   // if(!(this.state.page +1 >(Math.ceil(this.state.totalResults/this.props.pageSize)))){
  //   //   let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76f913c3e3c441b38a55d6be51067b23&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading:true})
  //   //   let data = await fetch(url);
  //   //   let newdata = await data.json();
  //   //   console.log(newdata);
  //   //   this.setState({
  //   //     articles: newdata.articles,
  //   //     page: this.state.page + 1,
  //   //     loading:false,
  //   //   });
  //   // }
  //   this.setState({
  //     page:this.state.page+1
  //   })
  //   this.scrollToTop()
  //   this.updateNews()

  // };

  // previousPage = async() => {
  //   // let url =
  //   // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76f913c3e3c441b38a55d6be51067b23&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let newdata = await data.json();
  //   // console.log(newdata);
  //   // this.setState({
  //   //   articles: newdata.articles,
  //   //   page: this.state.page - 1,
  //   //   loading:false,
  //   // });
  //   this.setState({
  //     page:this.state.page+1
  //   })
  //   this.scrollToTop()
  //   this.updateNews()
  // };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76f913c3e3c441b38a55d6be51067b23&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let newdata = await data.json();
    console.log(newdata);
    this.setState((prevState)=>({
      articles: [...prevState.articles, ...newdata.articles],
      totalResults: newdata.totalResults,
    
    }));
  };


  render() {
    return (
      <>
      
        <div className="container">
          <h1 className="text-center my-4">Trending News</h1>
          {this.state.loading && <Loader/>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            // hasMore ={true}
            loader={<span>Loading...</span>}
          >
        
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
          </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between my-5">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.previousPage}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page +1 >(Math.ceil(this.state.totalResults/20))}
            className="btn btn-dark"
            onClick={this.nextPage}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
