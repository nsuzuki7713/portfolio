import { HandleScroll } from '../components/handleScroll';

export const Top = () => {
    return (
        <main>
            <div className="FV">
                <div className="FV__inner">
                    <div id="particles-js"></div>
                </div>
            </div>
            <span className="FV__title"> SaTtto</span>
            <div className="contents data-scroll">
                <section className="section" id="Profile">
                    <HandleScroll />
                </section>

                <div className="section" id="works">
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
                </div>

                <section className="section" id="skill">
                    <div className="section__inner">
                        <div className="section__titleBlock">
                            <div className="section__titleBlock--title">
                                <img src="img/top/contact.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="inner"></div>
                </footer>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>
                <script src="src/js/particles.js"></script>
                <script type="module" src="src/js/simpleParallax.js"></script>
                <script type="module" src="src/js/smoothScroll.js"></script>
            </div>
        </main>
    );
}

