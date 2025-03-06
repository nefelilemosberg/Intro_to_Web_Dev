## Notes 6/3/25

>- Over flowing image inside a box - max-width: 100%
>- object fit: cover (does not keep proportions), 
>- border images 
>- thumbnail image 
>- Padding is the space between the image adn border 
>- Use the border to create thumbnail. 
>- to make a link open up in a new window target="_blank"
>- responsive image max width 100, height auto
>- opacity 
>- to add text to an image 

 <p>Text in image:</p>

    <div class="textContainer">
      <img
        class="textImg"
        src="img_5terre_wide.jpg"
        alt="Cinque Terre"
        width="1000"
        height="300"
      />
      <div class="textCenter">Centered</div>
      <div class="bottomleft">Bottom Left Text</div>
      <div class="bottomright">Bottom Right Text</div>
      <div class="topright">Top Right Text</div>
      <div class="topleft">Top Left Text</div>
    </div>

    .textImg {
  width: 100%;
  height: auto;
  opacity: 0.3;
}

.textCenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

.topleft {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 20px;
}

.topright {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 20px;
}

.bottomleft {
  position: absolute;
  bottom: 8px;
  left: 12px;
  font-size: 20px;
}

.bottomright {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 20px;
}
>- fade in overlay
>- translations, position, rotate uses deg, scale, skew
>- matrix; all ecompassing 