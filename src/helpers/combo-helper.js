import InstagramEmbed from 'react-instagram-embed';
import $ from "jquery";
import {useEffect} from 'react';

export function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
 

export function randomId() {
    return 'a' + Math.random().toString(36).substr(2, 9);
};
  

export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export function PageSection({
    name,
    headerExtra=null,
    children
}) {
    return <>
        <div className="page-section">
            <div className="section-header">
                <span className="page-sec-title">{name}</span>{headerExtra}
            </div>
            {children}
        </div>
    </>
}

export function TagSection({
    name,
    date,
    tags,
    selectedTags,
    updateTags,
    allTagsAccumulator,
    flexi=false,
    children,
}) {
    tags.forEach(tag => {
        if (!allTagsAccumulator.includes(tag)) {
            allTagsAccumulator.push(tag);
        }
    });
    
    let headerExtra = <>
        <div className="section-extra">
            <span className="news-date">{date}</span>
        </div>
    </>

    let showSection = (selectedTags.every((tag) => tags.includes(tag))) || (selectedTags.length == 0);
    if (!showSection) {
        return <></>
    }

    let bodyTag = children;
    if (flexi === true) {
        bodyTag = <div className="flex-container">
            {bodyTag}
        </div>
    }

    return <>
        <PageSection name={name} headerExtra={headerExtra}>
            <div style={{'display': 'block'}}>
                {tags.map((t, i) => <Tag key={i} tag={t} updateTags={updateTags} selectedTags={selectedTags}/>)}<br/>
                <hr></hr>
                {bodyTag}
            </div>
        </PageSection>
    </>
}

export function FlexContainer({
    children
}) {
    return <div className="flex-container">
        {children}
    </div>
}

export function Tag({
    tag,
    updateTags,
    selectedTags
}) {
    let isActiveTag = selectedTags.includes(tag);

    return <div className="inline-flex">
        <div 
            className={"section-tag" + (isActiveTag ? " is-active" : '')} 
            onClick={() => updateTags(tag)}
            data-toggle="tooltip" 
            title={`Filter for items tagged with "${tag}"`}
        >
            {tag}
        </div>
    </div>
}

export function InText({
    float=null,
    width='100%',
    minWidth=null,
    minHeight=null,
    stretchOnSmall=true,
    children
}) {
    let style = {};
    if (float) {
        style['float'] = float;
    }
    if (width) {
        style['width'] = width;
    }
    if (minWidth) { 
        style['minWidth'] = minWidth;
    }
    if (minHeight) {
        style['minHeight'] = minHeight;
    }

    return <div className={"in-text" + (stretchOnSmall ? ' stretch-small' : '')} style={style}>
        {children}
    </div>
}

export function Image({
    imgSrc,
    caption=null
}) {
    let captionTag = <></>
    if (caption !== null) {
        captionTag = <figcaption className="caption">
            {caption}
        </figcaption>
    }

    return <figure>
        <img src={imgSrc} />
        {captionTag}
    </figure>
}

export function YouTube({
    id,
    caption=null
}) {
    return <div>
        <div className="iframe-div">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {caption ? <div className='caption'>{caption}</div> : <></>}
    </div>
}

export function SoundCloud({
    iframeTag,
    bckLink,
}) {
    let link = iframeTag.split('src="')[1].split('"></iframe>')[0];

    let bckLinkTag = <div className="soundcloud-bck">
        If the SoundCloud content above does not load, click <a href={bckLink}>here</a>
    </div>

    return <div className="soundcloud-wrap">
        <iframe 
            width="100%" 
            height="150" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src={link}>
        </iframe>
        {bckLink ? bckLinkTag : <></>}
    </div>
}

export function Instagram({
    url,
}) {
    return <div className="instagram-wrap">
        <InstagramEmbed
            url={url}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
        />
    </div>
}

export function Text({
    children
}) {
    return <div className="text">
        {children}
    </div>
}

export function Part({
    proportion,
    minWidth=null,
    children
}) {
    let style = {
        'flexBasis': `${proportion*100}%`,
        'float': 'left'
    };
    if (minWidth) {
        style['minWidth'] = minWidth;
    }

    return <div className="flex-part" style={style}>
        {children}
    </div>
}