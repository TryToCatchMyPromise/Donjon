import React from "react";

const Main = (props) => {

  return (
      <div className='main-block'>
        <section className="video-and-menu">
          <div className="video-container">
            <video className="main-video" playsinline='' autoPlay="" loop="" muted="" poster="">
              <source data-src="my_video.mp4" type="video/mp4" src="files/my_video.mp4"/>
            </video>
          </div>
          <div className="header">
            <nav>
              <div className="nav-item"><a target="_blank" href="http://google.com">Главная</a></div>
              <div className="nav-item"><a href="#about-us">О нас</a></div>
              <div className="nav-item" id="test"><a target="_blank" href="http://google.com">Наши особенности</a></div>
              <div className="nav-item"><a target="_blank" href="http://google.com">Контакты</a></div>
            </nav>
          </div>
          <div className="overlay"></div>
          <div className="scrollTop">
            <div className='scrollTopArrow'></div>
          </div>
        </section>
        <section className="image-transfer">
          <div className="image-transfer-flex">
            <div id="firstImage" className="image-transfer-items">
              <div className="image-transfer-item-name">Ресторан</div>
            </div>
            <div id="secondImage" className="image-transfer-items">
              <div className="image-transfer-item-name">Гостиница</div>
            </div>
            <div id="thirdImage" className="image-transfer-items">
              <div className="image-transfer-item-name">Услуги</div>
            </div>
          </div>
        </section>
        <section className="our-history">
          <div className="history-column">
            <div className="history-row">
              <text>"Донжон" – это комплекс, выполненный в неповторимом
                средневековом стиле времён европейского средневековья,
                когда каждый феодал заботился о комфорте и надёжности
                для себя и своей семьи.
              </text>
            </div>
            <div className="history-row">2</div>
          </div>
          <div className="history-column">
            <div className="history-row">3</div>
            <div className="history-row">
              <text>Ну а самое защищённое место в замке – башня, называлась
                «донжон», и именно там и жил феодал со своими близкими,
                так как понимал, что укромнее места во всём замке не сыщешь.
              </text>
            </div>
          </div>
          <div className="history-column">
            <div className="history-row">
              <text>Именно поэтому, вдохновившись духом средневековья, мы решили
                открыть замечательное место, которое будет нести ценности и
                идеалы того времени, совмещенные с инновациями и комфортом
                нашего времени.
              </text>
            </div>
            <div className="history-row">6</div>
          </div>
          <div className="history-column">
            <div className="history-row">7</div>
            <div className="history-row">
              <text>Под одной крышей мы собрали всё, чтобы ваш отдых
                состоялся как душой, так и телом.
              </text>
            </div>
          </div>
        </section>
      </div>
  );
};


export default Main;