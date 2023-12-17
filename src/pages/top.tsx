import { HandleScroll } from '../components/handleScroll';

export const Top = () => {
    return (
        <main>
            <section className="FV">
                <div className="FV__inner">
                    <div id="particles-js"></div>
                </div>
            </section>

            <h1 className="FV__title"> sayatto</h1>

            <div className="contents">
                <HandleScroll sectionId="Profile" />
                <HandleScroll sectionId="works" />


                <footer className="footer">
                    <div className="inner"></div>
                </footer>
            </div>
        </main>
    );
}

