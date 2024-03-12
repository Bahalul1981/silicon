import React, { useState, useEffect } from "react";
import homeIcons from "../../../style/assets/Image/news/home.svg";
import arrowIcons from "../../../style/assets/Image/news/bx-chevrons-right.svg";
import newsIcons from "../../../style/assets/Image/news/News.svg";
function NewsPageTwo() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://kyhnet23-assignment.azurewebsites.net/api/news"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNewsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="news-page-wrapper">
      <div className="text-icons">
        <div className="news-icons">
          <img src={homeIcons} alt="home" />
          <img src={arrowIcons} alt="arrow" />
          <a href="/error">
            <img src={newsIcons} alt="news" />
          </a>
        </div>
        <div className="news-heading">
          <h2>Our News</h2>
        </div>
      </div>

      <div className="web-api">
        {loading && <h3 className="dataLoadingText">Data is loading...</h3>}
        {!loading &&
          newsData.map((news) => (
            <div key={news.id} className="news-item">
              <div className="upper-section">
                <img src={news.imageUrl} alt="News" />
                <div className="catagory-date">
                  <p className="catagory">{news.category}</p>
                  <p className="published">{news.published}</p>
                </div>
              </div>
              <h4 className="news-title">{news.title}</h4>
              <div className="horizontal-line">
                <hr />
              </div>

              <div className="lower-section">
                <img src={news.author.profileImageUrl} alt="Author" />
                <div className="author-name">{`${news.author.firstName} ${news.author.lastName}`}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NewsPageTwo;
