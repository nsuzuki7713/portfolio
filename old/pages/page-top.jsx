import React from "react";
import handleScroll from "../components/handleScroll";

export const PageTop = () => {
  return (
    <main>
      <div className="FV">
        <div class="FV__inner">
          <div id="particles-js"></div>
        </div>
      </div>
      <span class="FV__title"> SaTtto</span>
      <div class="contents data-scroll">

        <handleScroll />

        <div class="section" id="works">
          <div class="section__inner">
            <div class="section__titleBlock">
              <h2 class="section__titleBlock--title">
                <img src="img/top/works.svg" alt="" />
              </h2>
            </div>
            <div class="cardWrapper">
              <div class="card">
                <a
                  class="url-link"
                  href="https://github.com/SaTtto-glitch/DogImageApp"
                  target="_blank"
                >
                  <img class="card__image" src="img/top/Dog_app.gif" alt="" />
                  <p class="card__title">Dogアプリ</p>
                  <p class="card__info">犬の画像をランダムに生成するアプリ</p>
                  <p class="card__info">HTML/CSS/JavaScipt/React</p>
                </a>
              </div>

              <div class="card">
                <a
                  class="url-link"
                  href="https://github.com/SaTtto-glitch/React-forum"
                  target="_blank"
                >
                  <img class="card__image" src="img/top/Forum_app.gif" alt="" />
                  <div class="">
                    <p class="card__title">掲示板アプリ</p>
                    <p class="card__info">
                      作成したスレッドにコメントができるアプリ
                    </p>
                    <p class="card__info">HTML/CSS/javascipt(React)</p>
                  </div>
                </a>
              </div>

              <div class="card">
                <a
                  class="url-link"
                  href="https://github.com/SaTtto-glitch/bookreview-app"
                  target="_blank"
                >
                  <img
                    class="card__image"
                    src="img/top/Review_app.gif"
                    alt=""
                  />
                  <p class="card__title">書籍レビューアプリ</p>
                  <p class="card__info">書籍情報と感想を投稿できるアプリ</p>
                  <p class="card-caption-info">ログイン機能を作成しました。</p>
                  <p class="card-caption-info">HTML/CSS/javascipt(React)</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section class="section" id="skill">
          <div class="section__inner">
            <div class="section__titleBlock">
              <div class="section__titleBlock--title">
                <img src="img/top/contact.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="inner"></div>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
        <script src="src/js/particles.js"></script>
        <script type="module" src="src/js/simpleParallax.js"></script>
        <script type="module" src="src/js/smoothScroll.js"></script>
      </div>
    </main>
  );
};
