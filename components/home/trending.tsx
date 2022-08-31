import { useEffect } from "react";
import NewsTicker, { Directions } from "react-advanced-news-ticker";

export default function Trending(props) {
  useEffect(() => {});
  return (
    <div id="trending" className="trending-area fix">
      <div className="container">
        <div className="trending-main">
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-tittle">
                <strong>Trending now</strong>
                {/* {props.news && (
                  <NewsTicker
                    // rowHeight = {48}
                    // maxRows = {2}
                    speed={600}
                    direction={Directions.UP}
                    duration={4000}
                    autoStart={true}
                    pauseOnHover={false}
                    id="myId"
                    className="myClassName1 myClassName2"
                    style={{ marginTop: 34 }}
                  >
                    <div></div>
                    {props.news.map((post, key) => (
                      <div key={key} className="ticker__item">
                        {post.description}
                      </div>
                    ))}
                  </NewsTicker>
                )} */}
                {/* <div className="trending-animated">
                  <div className="ticker-wrap">
                    <div className="ticker">
                      <div id="ticker">
                        {props.news &&
                          props.news.map((post, key) => (
                            <div key={key} className="ticker__item">
                              {post.description}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {props.news &&
                props.news.slice(0, 1).map((post, key) => (
                  <div key={key} className="trending-top mb-30">
                    <div className="trend-top-img">
                      <img src={post.urlToImage} alt="trending news image" />
                      <div className="trend-top-cap">
                        <span>{post.source.name}</span>
                        <h2 className="ellipsis-trending-text">
                          <a href={post.url} target="__blank">
                            {post.title}
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="trending-bottom">
                <div className="row">
                  {props.news &&
                    props.news.slice(1, 4).map((post, key) => (
                      <div key={key} className="col-lg-4">
                        <div className="single-bottom mb-35">
                          <div className="trend-bottom-img mb-30">
                            <img
                              className="trending-img-md"
                              src={post.urlToImage}
                              alt="trending news image"
                            />
                          </div>
                          <div className="trend-bottom-cap">
                            <span className="color1">{post.source.name}</span>
                            <h4 className="ellipsis-trending-text">
                              <a href={post.url} target="__blank">
                                {post.title}
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ overflowY: "auto", maxHeight: "800px" }}
            >
              {props.news &&
                props.news.slice(4, -1).map((post, key) => (
                  <div key={key} className="trand-right-single d-flex">
                    <div className="trand-right-img">
                      <img
                        className="trending-img-sm"
                        src={post.urlToImage}
                        alt="trending news image"
                      />
                    </div>
                    <div className="trand-right-cap">
                      <span className="color1">{post.source.name}</span>
                      <h4 className="ellipsis-trending-text">
                        <a href={post.url} target="__blank">
                          {post.title}
                        </a>
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
