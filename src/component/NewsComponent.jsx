import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class NewsComponent extends Component {
  articles = [];
  constructor() {
    super();
    console.log("component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=76f913c3e3c441b38a55d6be51067b23";
    let data = await fetch(url);
    let newdata = await data.json();
    console.log(newdata);
    this.setState({
      articles: newdata.articles,
    });
  }
  nextPage =()=>{
console.log("next")
  }
  previousPage =()=>{
console.log("prev")
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row ">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItems
                    title={e.title ? e.title.slice(0, 45) : ""}
                    discription={
                      e.description ? e.description.slice(0, 88) : ""
                    }
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-dark" onClick={this.previousPage}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextPage}>Next &rarr;</button>
        </div>
      </>
    );
  }
}
