import {
    connectWallet,
    getActiveAccount,
    disconnectWallet,
    changeName,
  } from "../Blockchain/wallet";
  import { useEffect, useState } from "react";
export default function Navbar(){
    const [wallet, setWallet] = useState(null);

    const handleConnectWallet = async () => {
      const { wallet } = await connectWallet();
      setWallet(wallet);
    };
    const handleDisconnectWallet = async () => {
      const { wallet } = await disconnectWallet();
      setWallet(wallet);
    };
  
    useEffect(() => {
      const func = async () => {
        const account = await getActiveAccount();
        if (account) {
          setWallet(account.address);
        }
      };
      func();
    }, []);
    return(
        <header>
       <div className="header-area">
            <div className="main-header ">
                <div className="header-top black-bg d-none d-md-block">
                   <div className="container">
                       <div className="col-xl-12">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="header-info-left">
                                    <ul>     
                                        <li><img src="assets/img/icon/header_icon1.png" alt=""/>34ºc, Sunny </li>
                                        <li><img src="assets/img/icon/header_icon1.png" alt=""/>Tuesday, 18th June, 2019</li>
                                    </ul>
                                </div>
                                <div className="header-info-right">
                                    <ul className="header-social">    
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                       <li> <a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
                <div className="header-mid d-none d-md-block">
                   <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-3">
                                <div className="logo">
                                    <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9">
                                <div className="header-banner f-right ">
                                    <img src="assets/img/hero/header_card.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
               <div className="header-bottom header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                                    <div className="sticky-logo">
                                        <a href="#"><img src="assets/img/logo/logo.png" alt=""/></a>
                                    </div>
                                <div className="main-menu d-none d-md-block">
                                    <nav>                  
                                        <ul id="navigation">    
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#trending">Trending</a></li>
                                            <li><a href="#weekly">Weekly</a></li>
                                            <li><a href="#whatsnew">Whats New?</a></li>
                                            <li><a href="#allnews">All News</a></li>
                                            <li><a href="#recent">Recent</a></li>
                                            <button
          onClick={wallet ? handleDisconnectWallet : handleConnectWallet} //changeName
          className="bg-red-500 px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer"
        >
          💳{" "}
          {wallet
            ? wallet.slice(0, 4) +
              "..." +
              wallet.slice(wallet.length - 4, wallet.length)
            : "Connect"}
        </button>
                                            {/* <li><a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="elements.html">Element</a></li>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                    <li><a href="details.html">Categori Details</a></li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>             
                            <div className="col-xl-2 col-lg-2 col-md-4">
                                <div className="header-right-btn f-right d-none d-lg-block">
                                    <i className="fas fa-search special-tag"></i>
                                    <div className="search-box">
                                        <form action="#">
                                            <input type="text" placeholder="Search"/>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-md-none"></div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
       </div>
    </header>
    )
}