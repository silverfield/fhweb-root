import {
    HashRouter as Router,
    NavLink,
} from "react-router-dom";
import {isMobile} from '../helpers/combo-helper'
import { withRouter } from "react-router";
import {useState, useEffect, useContext, createContext} from "react"

import musicBck from "../pics/music.png"
import dsBck from "../pics/ds.png"
import blogsBck from "../pics/blogs.jpg"
import aboutBck from "../pics/about.jpg"

import musicBckWhole from "../pics/music-whole.png"
import dsBckWhole from "../pics/ds-whole.png"
import blogsBckWhole from "../pics/blogs-whole.jpg"
import aboutBckWhole from "../pics/about-whole.jpg"

import blogOsloBck from "../pics/blog-oslo.jpg"

import ScrollToTop from './ScrollToTop.js'

const MenuItem = withRouter(MenuItemImp);
export const HeaderContent = withRouter(HeaderContentImp);

function MenuItemImp({
    to,
    title,
    submenuItems=null,
    sticky,
    location
}) {
    const [inMenu, setInMenu] = useState(false);
    const [inSubMenu, setInSubMenu] = useState(false);

    let isActive = location.pathname.startsWith(to);

    let submenu = <></>

    if (submenuItems) {
        submenu = <div 
            className={'sub-menu' + ((inMenu || inSubMenu || (isActive && !sticky)) ? ' active-sub' : '')}
            onMouseEnter={isMobile() ? null : () => setInSubMenu(true)} 
            onMouseLeave={isMobile() ? null : () => setInSubMenu(false)}
        >
            {submenuItems.map((i, ind) => <div key={ind} className="sub-menu-item">
                <NavLink to={i['to']} className="second-link" activeClassName="active-link">{i['title']}</NavLink>
            </div>)}
        </div>
    }

    let navLink = <NavLink 
        to={to} 
        className={"main-link" + ((inMenu || inSubMenu) ? ' hovering-main' : '')} 
        activeClassName="active-link"
    >{title}</NavLink>

    let dummyNavLink = <a
        className={"main-link" + ((inMenu || inSubMenu) ? ' hovering-main' : '') + (isActive ? ' active-link' : '')} 
    >{title}</a>

    return <div 
        className="menu-item" 
        onMouseEnter={isMobile() ? null : () => setInMenu(true)} 
        onMouseLeave={isMobile() ? null : () => setInMenu(false)}
        onClick={isMobile() ? () => setInMenu(!inMenu) : null}
    >
        {(isMobile() && (submenuItems !== null)) ? dummyNavLink : navLink }
        {submenu}
    </div>
}

function Menu({
    sticky
}) {
    return <div className="menu">
        <MenuItem to="/home" title="home" sticky={sticky} />
        <MenuItem to="/my-music" title="my music" submenuItems={[
            {to: '/my-music/everyday', title: 'everyday (demo album)'},
            {to: '/my-music/originals', title: 'other originals'},
            {to: '/my-music/covers', title: 'covers'},
            {to: '/my-music/collaborations', title: 'collaborations'}
        ]} sticky={sticky}/>
        <MenuItem to="/busking" title="busking 4 good" sticky={sticky}/>
        <MenuItem to="/repertoire" title="repertoire" sticky={sticky}/>
        <MenuItem to="/about" title="about me" sticky={sticky}/>
        <MenuItem to="/contact" title="contact me" sticky={sticky}/>
    </div>
}

function NavBar({

}) {
    useEffect(() => {
        var navbar = document.getElementById("nav");
        var menuSticky = document.getElementById("menu-sticky");
        var body = $('#body');

        function resizeStickyMenu() {
            menuSticky.style.left = body.css('marginLeft');
            menuSticky.style.right = body.css('marginRight');
        };
        resizeStickyMenu();
        
        window.onscroll = function() {
            if (window.pageYOffset >= navbar.clientHeight) {
                menuSticky.style.display = 'block';
            } else {
                menuSticky.style.display = 'none';
            }
        };

        window.onresize = function() {
            resizeStickyMenu();
        };
    });

    return <>
        <nav id="nav">
            <ScrollToTop>
                <div id="menu-std">
                    <Menu sticky={false}/>
                </div>
                <div id="menu-sticky" style={{'display': 'none'}}>
                    <Menu sticky={true}/>
                </div>
            </ScrollToTop>
        </nav>
    </>;
}

function BlogItem({
    title,
    link,
    bck
}) {
    return <>
        <div 
            className="blog-item" 
            href={link} 
            style={{'backgroundImage': `url(${bck})`}} 
        >
            <span className="blog-title">{title}</span>
        </div>
    </>
}

function HeaderItem({
    title,
    bck,
    bckWhole,
    children
}) {
    const [expanded, setExpanded] = useState(title === 'Blogs' ? true : false);

    return <>
        <div 
            className={"header-item" + (expanded ? ' expanded' : ' not-expanded')} 
            style={{'backgroundImage': `url(${expanded ? bckWhole : bck})`}}
        >
            <div 
                className="header-item-title"
                onClick={() => setExpanded(!expanded)}
            >
                {title}
            </div>
            <div className="header-item-content">
                {expanded ? children : <></> }
            </div>
        </div>
    </>
}

function HeaderContentImp({
    location
}) {

    let isHome = location.pathname.startsWith('/home') || location.pathname == '/';

    return (
        <>
            <HeaderItem 
                title="Music"
                bck={musicBck}
                bckWhole={musicBckWhole}
            >
                <div className="content-item">
                    <a href="https://music.ferohajnovic.com"><span className="title">music.ferohajnovic.com</span></a>
                </div>
                <div className="content-item">
                    <span className="title">Social media</span>
                    <div className="social-med-icons">
                        <a href="https://www.facebook.com/feromusician" className="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/fero.hajnovic" className="fa fa-instagram"></a>
                        <a href="https://soundcloud.com/ferohajnovic" className="fa fa-soundcloud"></a>
                        <a href="https://www.youtube.com/channel/UCbFZJZ1bf8nMcLPJie5-mTA" className="fa fa-youtube"></a>
                    </div>
                </div>
            </HeaderItem>
            <HeaderItem 
                title="Data science"
                bck={dsBck}
                bckWhole={dsBckWhole}
            >

            </HeaderItem>
            <HeaderItem 
                title="Blogs"
                bck={blogsBck}
                bckWhole={blogsBckWhole}
            >
                <div className="blogs">
                    <BlogItem 
                        title="Life in Oslo" 
                        bck={blogOsloBck}
                        link="http://zivotvosle.blogspot.com"
                    />
                    <BlogItem 
                        title="Life in Oslo" 
                        bck={blogOsloBck}
                        link="http://zivotvosle.blogspot.com"
                    />
                    <BlogItem 
                        title="Life in Oslo" 
                        bck={blogOsloBck}
                        link="http://zivotvosle.blogspot.com"
                    />
                    <BlogItem 
                        title="Life in Oslo" 
                        bck={blogOsloBck}
                        link="http://zivotvosle.blogspot.com"
                    />
                </div>
                
            </HeaderItem>
            <HeaderItem 
                title="About"
                bck={aboutBck}
                bckWhole={aboutBckWhole}
            >

            </HeaderItem>
        </>
    );
  }
  

export default function Header({

}) {
    return <Router>
        <HeaderContent/>
    </Router>
}