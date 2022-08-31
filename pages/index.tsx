import Head from "next/head";
import React, { useEffect, useState } from "react";
import "regenerator-runtime";
import { allNews, trendingNews, weekly } from "../components/APIs/allNews";
import RecentNews from "../components/home/recentNews";
import Trending from "../components/home/trending";
import Weekly from "../components/home/weekly";
import Weekly2 from "../components/home/weekly2";
import WhatsNew from "../components/home/whatsNew";
import YoutubeSec from "../components/home/youtubeSec";
import Footer from "../components/utils/footer";
import Navbar from "../components/utils/navbar";
import PaginationBtn from "../components/utils/paginationBtn";
import Preloader from "../components/utils/preloader";
import axios from "axios";
import AllNews from "../components/home/allNews";
export default function Home() {
  const [loader, setLoader] = useState(true);
  const [allNewsState, setAllNews] = useState([]);
  const [trendingNewsState, setTrendingNews] = useState([]);
  const [weeklyNewsState, setWeeklyNewsState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setAllNews(await allNews());
      setTrendingNews(await trendingNews());
      setWeeklyNewsState(await weekly());
    };
    fetchData().then(()=>{setLoader(false)});


    // window.$ = window.jQuery = require("jquery");
    // require("../public/assets/js/vendor/modernizr-3.5.0.min.js");
    // require("../public/assets/js/vendor/jquery-1.12.4.min.js");
    // require("../public/assets/js/popper.min.js");
    // // require("../public/assets/js/bootstrap.min.js")
    // require("../public/assets/js/jquery.slicknav.min.js");
    // require("../public/assets/js/owl.carousel.min.js");
    // require("../public/assets/js/slick.min.js");
    // require("../public/assets/js/gijgo.min.js");
    // require("../public/assets/js/wow.min.js");
    // require("../public/assets/js/animated.headline.js");
    // require("../public/assets/js/jquery.magnific-popup.js");
    // require("../public/assets/js/jquery.ticker.js");
    // require("../public/assets/js/site.js");
    // require("../public/assets/js/jquery.scrollUp.min.js");
    // require("../public/assets/js/jquery.nice-select.min.js");
    // require("../public/assets/js/jquery.sticky.js");
    // require("../public/assets/js/contact.js");
    // require("../public/assets/js/jquery.form.js");
    // require("../public/assets/js/jquery.validate.min.js");
    // require("../public/assets/js/mail-script.js");
    // require("../public/assets/js/jquery.ajaxchimp.min.js");
    // require("../public/assets/js/plugins.js");
    require("../public/assets/js/main");
  }, []);

  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/ticker-style.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <script src="//cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"></script>
        <script>new WOW().init()</script>
      </Head>
{
  loader && 
  <Preloader/>
}
{typeof window !== 'undefined' &&
      <Navbar />
}

      <main >
        <Trending news={trendingNewsState}/>
        <hr></hr>
        <Weekly news={weeklyNewsState}/>
        <hr></hr>
        <WhatsNew/>
        <hr></hr>
        {/* <Weekly2 /> */}
        <AllNews news={allNewsState} popular={weeklyNewsState}/>
        <hr></hr>
        {/* <YoutubeSec /> */}
        <RecentNews news={weeklyNewsState}/>
        {/* <hr></hr> */}
        {/* <PaginationBtn /> */}
        <Footer />
      </main>
    </div>
  );
}
