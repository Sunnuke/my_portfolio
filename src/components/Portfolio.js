import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        {/* <div className="twelve columns collapsed"> */}
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="s cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <h5 style={{ color: "#FF00FF", textShadow: "0px 0px 5px #FF00FF" }}>
                    Check out <a style={{ color: "#00FFFF", textShadow: "0px 0px 3px #00FFFF" }} href={`${item.site}`} target="_blank" rel="noopener noreferrer">
                      {item.name}</a>
                    now!
                  </h5>
                  <div className="item-wrap">
                    {/* <a href={`${item.site}`} target="_blank" rel="noopener noreferrer"> */}
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        {/* </div> */}
      </div>
  </section>
        );
  }
}