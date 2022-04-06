import React, { Component } from "react";
import NavBar from "./navBar";

import axios from "axios";

class Home extends Component {
  state = {
    news: [],
  };

  componentDidMount = () => {
    this.getNews();
  };

  getNews = async () => {
    try {
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-03-02&sortBy=publishedAt&apiKey=e34be4537dc347f1b6286fc9e14f9a02`;
      let response = await axios.get(url);

      const data = response.data.articles;

      this.setState({
        news: data,
      });
    } catch (error) {}
  };

  render() {
    const { news } = this.state;

    console.log(news);

    return (
      <div>
        <NavBar />
        <div className="hero"></div>

        <section id="feeds">
          <div className="container">
            <h3 className="text-center">Breaking News</h3>
            <div className="row">
              {news.map((n) => (
                <div className="col-lg-3 mt-3" key={n.publishedAt}>
                  <div className="card">
                    <img src={n.urlToImage} className="img-fluid" alt="image" />
                    <div className="card-body">
                      <h5 className="card-title">{n.title}</h5>
                      <p className="card-text">{n.content}</p>
                      <a
                        href={n.url}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
