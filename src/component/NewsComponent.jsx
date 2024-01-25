import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class NewsComponent extends Component {
  articles =[
    {
      "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Apple Music Classical Now Available in China, Japan, and More Countries",
        "description": "Apple Music Classical is now available in China, Japan, South Korea, Taiwan, Hong Kong, and Macao, fulfilling a rollout promise to the regions that Apple made earlier this month. \n\n\n\n\n\nApple Music Classical first launched in most other countries in March 2023…",
        "url": "https://www.macrumors.com/2024/01/24/apple-music-classical-now-available-china-japan/",
        "urlToImage": "https://images.macrumors.com/t/dHHWplDIzQicXRGrZTSH2fX5uMM=/2000x/article-new/2023/03/apple-music-classical.jpg",
        "publishedAt": "2024-01-24T11:13:49Z",
        "content": "Apple Music Classical is now available in China, Japan, South Korea, Taiwan, Hong Kong, and Macao, fulfilling a rollout promise to the regions that Apple made earlier this month. \r\nApple Music Classi… [+975 chars]"
        },
      {
        "source": {
          "id": null,
          "name": "MacRumors"
          },
          "author": "Joe Rossignol",
          "title": "Apple Releases visionOS 1.0.1 Ahead of Vision Pro Launch",
          "description": "While the Vision Pro does not launch until February 2, Apple today released visionOS 1.0.1 for the headset, according to developer Nicolás Álvarez. It's unclear what's new in the software update, as Apple has yet to start sharing visionOS release notes.\n\n\n\n\n\n…",
          "url": "https://www.macrumors.com/2024/01/23/apple-releases-visionos-1-0-1/",
          "urlToImage": "https://images.macrumors.com/t/SBzHPBLGxpliBkkqGJnoqytBGi8=/2500x/article-new/2023/06/Apple-Vision-Pro-with-battery-Feature-Blue-Magenta.jpg",
          "publishedAt": "2024-01-24T02:20:30Z",
          "content": "While the Vision Pro does not launch until February 2, Apple today released visionOS 1.0.1 for the headset, according to developer Nicolás Álvarez. It's unclear what's new in the software update, as … [+384 chars]"
          },
      {
      "source": {
       "id": null,
       "name": "Android Central"
       },
       "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
       "title": "I'm just not excited about the Galaxy S24 series",
       "description": "Samsung is once again focusing on buzzwords instead of fixing long-standing issues with its flagships.",
       "url": "https://www.androidcentral.com/phones/im-just-not-excited-about-the-galaxy-s24-series",
       "urlToImage": "https://cdn.mos.cms.futurecdn.net/jWnUNxrwd5hZJd2cwLsfY5-1200-80.jpg",
       "publishedAt": "2024-01-24T11:42:03Z",
       "content": "To no one's astonishment, AI took center stage at Samsung's Galaxy S24 series launch event. The Galaxy S24, S24+, and S24 Ultra usher in the age of Galaxy AI, with Samsung liberally throwing the buzz… [+4737 chars]"
       }
       , {
        "source": {
         "id": null,
         "name": "Hipertextual"
         },
         "author": "Rubén Chicharro",
         "title": "El Apple Car se retrasa hasta 2028, sin una de sus características más esperadas",
         "description": "Los planes de Apple sobre su coche autónomo, conocido como Apple Car, no están yendo como se esperaba. Según Bloomberg, la compañía ha vuelto a retrasar su lanzamiento —esta vez, dos años más de lo previsto anteriormente—, y ha acordado limitar algunas funcio…",
         "url": "http://hipertextual.com/2024/01/apple-car-se-retrasa-hasta-2028",
         "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/01/apple-scaled.jpg",
         "publishedAt": "2024-01-24T11:34:19Z",
         "content": "Los planes de Apple sobre su coche autónomo, conocido como Apple Car, no están yendo como se esperaba. Según Bloomberg, la compañía ha vuelto a retrasar su lanzamiento esta vez, dos años más de lo pr… [+3197 chars]"
         }
  ]
  constructor(){
    super();
    console.log("component")
    this.state ={
        articles:this.articles,
        loading : false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=76f913c3e3c441b38a55d6be51067b23"
    let data = await fetch(url)
    let newdata = await data.json()
  console.log(newdata)
    this.setState({
      articles:newdata.articles
    })
  }
  render() {
  
    return (
      <div>
        <div className='container'>
            <div className="row">
            {this.state.articles.map((e)=>{
   return(
    <div className="col-md-4" key={e.url}>
    <NewsItems title={e.title?e.title.slice(0,45):""} discription={e.description?e.description.slice(0,88):""} imageUrl={e.urlToImage} newsUrl={e.url} />
</div>
   )
    })}
               
             
            
            </div>

        </div>
      </div>
    )
  }
}
