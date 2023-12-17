import { useEffect, useState } from 'react';
import '../scss/pages/top.scss';

export const HandleScroll = ({ sectionId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`section fade ${isVisible ? 'fade-in' : ''}`} id={sectionId}>
      {
        sectionId === 'Profile' && (
          <div className="section__inner">
            <div className="section__titleBlock">
              <h2 className="section__titleBlock--title">
                <img src="img/top/profile.svg" alt="" />
              </h2>
            </div>

            <div className="column">
              <div className="column__item u-center">
                <img src="img/top/profile.JPG" alt="" />
                <p className="logo-title">sayatto</p>
              </div>

              <div className="column__item">
                <p className="text">
                  東京のWeb制作会社でフロントエンドエンジニアをしています。
                </p>

                <div>
                  <p className='column__item--title'>▼ Skill</p>
                  <p className="text">
                    HTML/CSS/JavaScipt/WordPress/React/Docker/Git
                  </p>
                </div>

                <div>
                  <p className='column__item--title'>▼ Favorite</p>
                  <p className="text">イラスト制作/読書/映画鑑賞/ゲーム</p>
                </div>
              </div>
            </div>
          </div>

        )
      }

      {
        sectionId === 'works' && (
          <div className="section__inner">
            <div className="section__titleBlock">
              <h2 className="section__titleBlock--title">
                <img src="img/top/works.svg" alt="" />
              </h2>
            </div>
            <div className="cardWrapper">
              <div className="card">
                <a
                  className="url-link"
                  href="https://github.com/SaTtto-glitch/DogImageApp"
                  target="_blank"
                >
                  <img
                    className="card__image"
                    src="img/top/Dog_app.gif"
                    alt=""
                  />
                  <p className="card__title">Dogアプリ</p>
                  <p className="card__info">
                    犬の画像をランダムに生成するアプリ
                  </p>
                  <p className="card__info">HTML/CSS/JavaScipt/React</p>
                </a>
              </div>

              <div className="card">
                <a
                  className="url-link"
                  href="https://github.com/SaTtto-glitch/React-forum"
                  target="_blank"
                >
                  <img
                    className="card__image"
                    src="img/top/Forum_app.gif"
                    alt=""
                  />
                  <div className="">
                    <p className="card__title">掲示板アプリ</p>
                    <p className="card__info">
                      作成したスレッドにコメントができるアプリ
                    </p>
                    <p className="card__info">HTML/CSS/javascipt(React)</p>
                  </div>
                </a>
              </div>

              <div className="card">
                <a
                  className="url-link"
                  href="https://github.com/SaTtto-glitch/bookreview-app"
                  target="_blank"
                >
                  <img
                    className="card__image"
                    src="img/top/Review_app.gif"
                    alt=""
                  />
                  <p className="card__title">書籍レビューアプリ</p>
                  <p className="card__info">書籍情報と感想を投稿できるアプリ</p>
                  <p className="card-caption-info">
                    ログイン機能を作成しました。
                  </p>
                  <p className="card-caption-info">HTML/CSS/javascipt(React)</p>
                </a>
              </div>
            </div>
          </div>
        )
      }
    </section>

  );
};
