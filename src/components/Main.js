import {useState, useEffect, useContext, createContext} from "react"

import musicBck from "../pics/music.png"
import dsBck from "../pics/ds.png"
import blogsBck from "../pics/blogs.jpg"
import aboutBck from "../pics/about.jpg"

import covidVisBck from "../pics/covid-vis.png"

import musicBckWhole from "../pics/music-whole.png"
import dsBckWhole from "../pics/ds-whole.png"
import blogsBckWhole from "../pics/blogs-whole.jpg"
import aboutBckWhole from "../pics/about-whole.jpg"

import blogOsloBck from "../pics/blog-oslo.jpg"
import blogPizzaBck from "../pics/blog-pizza.jpg"
import blogWritesBck from "../pics/blog-writes.jpg"
import blogAfricaBck from "../pics/blog-africa.jpg"
import blogStreetplayBck from "../pics/blog-streetplay.jpeg"

function BoxItem({
    title,
    link,
    bck,
    note
}) {
    return <>
        <div className="box-item-wrap">
            <a 
                className="box-item" 
                href={link} 
                style={{'backgroundImage': `url(${bck})`}} 
            >
                <span className="box-title">{title}</span>
                <span className="box-note">{note}</span>
            </a>
        </div>
    </>
}

function MainItem({
    title,
    note,
    bck,
    bckWhole,
    children
}) {
    const [expanded, setExpanded] = useState(false);

    return <>
        <div 
            className={"main-item" + (expanded ? ' expanded' : ' not-expanded')} 
            style={{'backgroundImage': `url(${expanded ? bckWhole : bck})`}}
        >
            <div 
                className="main-item-title"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="title-text">{title}</div>
                <div className="title-note">{note}</div>
            </div>
            <div className={"main-item-content " + (expanded ? ' main-item-content-shown': '')}>
                {children}
            </div>
        </div>
    </>
}

export default function Main({
}) {

    return (
        <>
            <MainItem 
                title="Music"
                note="Studio and live recordings of originals, covers, collaborations..."
                bck={musicBck}
                bckWhole={musicBckWhole}
            >
                <div className="content-item">
                    <a className="zoom-link" href="https://music.ferohajnovic.com">
                        <span className="title">music.ferohajnovic.com</span>
                    </a><br/>
                    <span className="box-note">My personal web for music</span>
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
            </MainItem>
            <MainItem 
                title="Data science"
                note="My online portfolio in data science or the general tech/data space"
                bck={dsBck}
                bckWhole={dsBckWhole}
            >
                <div className="content-item">
                    <a className="zoom-link" href="https://medium.com/@ferohajnovic">
                        <span className="title">medium.com/@ferohajnovic</span>
                    </a><br/>
                    <span className="box-note">My Medium blog-space</span>
                </div>
                <div className="boxes">
                    <BoxItem 
                        title="Covid-19 vis" 
                        bck={covidVisBck}
                        link="http://covid-vis.ferohajnovic.com/"
                        note="Interactive visualisations of Covid-19 based on dc.js"
                    />
                </div>
            </MainItem>
            <MainItem 
                title="Blogs"
                note="My online blogs on various topics"
                bck={blogsBck}
                bckWhole={blogsBckWhole}
            >
                <div className="boxes">
                    <BoxItem 
                        title="A Slice of Life" 
                        bck={blogPizzaBck}
                        link="http://ferovpizzaquest.blogspot.com/"
                        note="The quest to find the best pizza in the world... And stories along the way"
                    />
                    <BoxItem 
                        title="Fero writes" 
                        bck={blogWritesBck}
                        link="http://ferowrites.blogspot.com/"
                        note="Blog about anything and everything..."
                    />
                    <BoxItem 
                        title="Street play tour 2015" 
                        bck={blogStreetplayBck}
                        link="http://ferostreetplay.blogspot.com/"
                        note="About the busking tour of Northern Europe in June 2015"
                    />
                    <BoxItem 
                        title="Africa" 
                        bck={blogAfricaBck}
                        link="http://feroafrica.blogspot.com/"
                        note="From the 4 months I spent in Ghana in 2015"
                    />
                    <BoxItem 
                        title="Life in Oslo" 
                        bck={blogOsloBck}
                        link="http://zivotvosle.blogspot.com"
                        note="My blogging entry ticket - from the time I spent in Norway (most of this blog is in Slovak)"
                    />
                </div>
                
            </MainItem>
            <MainItem 
                title="About"
                note="More about this page and me..."
                bck={aboutBck}
                bckWhole={aboutBckWhole}
            >
                <div className="content-item">
                    Hi visitor of this page!
                </div>
                <div className="content-item">
                    This is the starting point to my online presence, 
                    which is generally composed of music, data science/tech and blogging.
                </div>
                <div className="content-item">
                    If you'd like to find out more about myself, see link below
                </div>
                <div className="content-item">
                    <a className="zoom-link" href="https://music.ferohajnovic.com/#/about">
                        <span className="title">music.ferohajnovic.com/#/about</span>
                    </a>
                </div>
            </MainItem>
        </>
    );
}