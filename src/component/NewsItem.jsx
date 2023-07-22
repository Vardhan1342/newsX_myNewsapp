import React, { Component } from 'react';


export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='scrollbarconatiner'>
        <div className="card my-3 " style={{width: "18rem"}}>
            <img src={imageUrl ? imageUrl :"https://ichef.bbci.co.uk/news/1024/branded_news/11597/production/_130336017_threads.png"} className="card-img-top" alt="..." />
            <span className="position-absolute z-3  start-50 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description ? description : "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>

                <a href={newsUrl}  className="btn">Read more</a>
        </div>
</div>
      </div>
    );
  }
}

export default NewsItem;
