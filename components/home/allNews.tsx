import {useState} from 'react'
import { DateRange } from 'react-date-range';

export default function AllNews(props) {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div className="pb-4 pt-4" id='allnews' style={{maxHeight:"2000px",overflowY:"hidden",overflowX:"hidden"}}>
      <div className="container">
        <div className="row mx-0">
          <div className="col-md-8 animate-box" >
            <div>
              <div className="section-tittle mb-30">
                <h2>All News</h2>
              </div>
            </div>
            <div style={{maxHeight:"1000px",overflowY:"auto",overflowX:"hidden"}}>
            {props.news &&
                props.news.map((post, key) => (
                    <div key={key} className="row pb-4">
              <div className="col-md-5">
                <div className="fh5co_hover_news_img">
                  <div className="ellipsis-allnews-img">
                    <img src={post.urlToImage} alt="All news image" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <h4>
                <a href={post.url} className="ellipsis-allnews-text">
                {post.title}
                </a>
                </h4>
                <h6 className="fh5co_mini_time py-1">
                  
                {post.source.name}
                </h6>
                <div className="fh5co_consectetur ellipsis-allnews-desc">
                 {post.description}
                </div>
              </div>
            </div>
                ))}
            </div>
          </div>
          <div
            className="col-md-4 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div className='mt-5 md-block d-none'>
              <h5>Sort By Popular Categories</h5>
            </div>
            <div className=" d-md-block d-none">
              <a href="#" className="genric-btn primary-border m-1">
                Business
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Technology
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Sport
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Art
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Lifestyle
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Three
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Photography
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Lifestyle
              </a>
              <a href="#" className="genric-btn primary-border m-1">
                Art
              </a>
            </div>
            <h5 className='pt-5  md-block d-none'>Sort By Date</h5>
            <div className=' d-md-block d-none'>
            <DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
            </div>
            <h4 className="fh5co_heading fh5co_heading_border_bottom py-2">
                Most Popular
              </h4>
            <div style={{maxHeight:"400px",overflowY:"auto",overflowX:"hidden"}}>
              {props.news &&
                props.news.slice(50,-1).map((post, key) => (
            <div className="row pb-3" key={key}>
              <div className="col-5 align-self-center ellipsis-allnews-img-sm">
                <img
                  src={post.urlToImage} alt="All news image"
                  className="fh5co_most_trading"
                />
              </div>
              <div className="col-7 paddding">
              <h6>
                <a href={post.url} className="ellipsis-allnews-text-sm">
                {post.title}
                </a>
                </h6>
                <div className="">
                {post.source.name}
                </div>
              </div>
            </div>
            ))}
            </div>
          </div>
        </div>
        {/* <div className="row mx-0 animate-box" data-animate-effect="fadeInUp">
          <div className="col-12 text-center pb-4 pt-4">
            <a href="#" className="btn_mange_pagging">
              <i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp; Previous
            </a>
            <a href="#" className="btn_pagging">
              1
            </a>
            <a href="#" className="btn_pagging">
              2
            </a>
            <a href="#" className="btn_pagging">
              3
            </a>
            <a href="#" className="btn_pagging">
              ...
            </a>
            <a href="#" className="btn_mange_pagging">
              Next <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp;
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
