import React from "react";
import Popup from "reactjs-popup";

import "./collection-item.styles.scss";
import "./collection-item-modal.styles.scss";
import "reactjs-popup/dist/index.css";

const CollectionItem = ({
  name,
  tcgplayer,
  images,
  hp,
  types,
  evolvesFrom
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${images.small})`,
      }}
    />
    <div className="collection-footer">
      <Popup trigger={<span className="name">{name}</span>} modal nested>
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> {name} </div>
            <div className="content">
              <div className="panels">
                <div className="first">
                  <img src={images.small} alt={name} />
                </div>
                <div className="second">
                  <span><strong>HP</strong>: {hp}</span>
                  <span><strong>Type</strong>: {types}</span>
                  <span><strong>Evolves From</strong>: {evolvesFrom}</span>
                </div>
              </div>
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  close();
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </Popup>

      <span className="price">
        {tcgplayer.prices.holofoil ? tcgplayer.prices.holofoil.low : "-"}
      </span>
    </div>
  </div>
);

export default CollectionItem;
//<span className="name">{name}</span>
