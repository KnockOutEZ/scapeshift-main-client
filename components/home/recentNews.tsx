
import Slider from "react-slick";

export default function RecentNews(props){
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        appendDots: (dots) => (
          <div
          className="slick-dots-parent"
          style={{
            textAlign: "center",
            right: "-2px",
            top: "-40px",
            position: "absolute",
          }}
          >
            <ul className="slick-dots"
            >
               {dots}
    
            </ul>
          </div>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return(
            <div className="recent-articles" id="recent">
        <div className="container">
           <div className="recent-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-50 mt-10">
                            <h3>Recent Articles</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    {props.news &&
                    <Slider {...settings}>
                {props.news.slice(10, 21).map((post, key) => (
                        <div key={key} className="recent-active dot-style d-flex dot-style">
                            <div className="single-recent mb-100">
                                <div className="what-img">
                                    <img style={{height:"300px",width:"344px"}} src={post.urlToImage} alt="recent news image"/>
                                </div>
                               <div className="what-cap">
                                    <span className="color1">{post.source.name}</span>
                                    <h4 className="ellipsis-trending-text"><a href={post.url} target="__blank">{post.title}</a></h4>
                                </div>
                            </div>
                        </div>
                ))}
                </Slider>}

                    </div>
                </div>
           </div>
        </div>
    </div> 
    )
}