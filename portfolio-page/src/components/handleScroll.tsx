import { useEffect, useState } from 'react';
import '../scss/pages/top.scss';

export const HandleScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector('.fade');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`column fade ${isVisible ? 'fade-in' : ''}`}>
      {
        <section className="section" id="Profile">
          <div className="section__inner">
            <div className="section__titleBlock fade">
              <div className="section__titleBlock--title">
                <img src="url($img/top/profile.svg)" alt="" />
              </div>
            </div>

            <div className="column">
              <div className="column__profile">
                <img src="img/top/profile.JPG" alt="" />
                <p className="logo-title">SaTtto</p>
              </div>

              <div className="column__text">
                <p className="text">
                  東京のWeb制作会社でフロントエンドエンジニアをしています。
                  <br />
                </p>

                <p>▼ Skill</p>
                <p className="text">
                  HTML/CSS/JavaScipt/WordPress/React/Docker/Git
                </p>

                <p className="text">▼ Favorite</p>
                <p className="text">イラスト制作/読書/映画鑑賞/ゲーム</p>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
};
