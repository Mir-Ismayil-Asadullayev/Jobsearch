import { useRef } from "react";
import navigationsBar from "../../assets/scss/components/layouts/navigationsBar.module.scss";
import IconsRenderer from "../utils/IconsRenderer.jsx";
import Languages from "../utils/Languages.jsx";
import { useEffect } from "react";

const NavigationsBar = () => {
    const navigationWrapper = useRef();
    const languages = useRef();
    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            const isSmallHeight = entries[0].contentRect.height <= 710;
            const isSmallWidth = entries[0].contentRect.width <= 196;
            if (isSmallWidth) navigationWrapper.current.classList.add(navigationsBar["navigation-wrapper--burger"]);
            else navigationWrapper.current.classList.remove(navigationsBar["navigation-wrapper--burger"]);
            if (isSmallHeight && isSmallWidth) languages.current.style.display = "none";
            else languages.current.style.display = "inline-block";
        });
        resizeObserver.observe(navigationWrapper.current);
    })


    return (
        <aside className={navigationsBar["navigations-container"]}>
            <div ref={navigationWrapper} className={navigationsBar["navigation-wrapper"]}>
                <header className={navigationsBar.header}>
                    <div className={navigationsBar["header__headings"]}>
                        <IconsRenderer name={"logo"} width={135} height={45} />
                        <div ref={languages}><Languages /></div>
                    </div>
                    <div className={navigationsBar["categories-navigation"]}>
                        <ul>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"bag"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Elanlar</span>
                            </li>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"categories"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Kateqoriyalar</span>
                            </li>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"industries"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Sənaye</span>
                            </li>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"companies"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Şirkətlər</span>
                            </li>
                        </ul>
                    </div>
                    <div className={navigationsBar["subscribe-navigation"]}>
                        <span className={navigationsBar["subscribe-navigation__title"]}>Sizin JobSearch</span>
                        <ul>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"favorite"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Seçilmiş elanlar</span>
                                <span className={navigationsBar["navigation-links__count"]}>0</span>
                            </li>
                            <li className={navigationsBar["navigation-links"]}>
                                <IconsRenderer name={"subscribed categories"} width={20} height={20} color={"rgb(0,0,0)"} />
                                <span>Abunə - kateqoriyalar</span>
                            </li>
                        </ul>
                    </div>
                    <div className={navigationsBar["dark-light-mode"]}>
                        <div
                            className={`${navigationsBar["dark-light-mode__light"]} ${navigationsBar["dark-light-mode--active"]}`}>
                            <IconsRenderer name={"sun"} width={"50%"} height={"50%"} />
                        </div>
                        <div className={navigationsBar["dark-light-mode__dark"]}>
                            <IconsRenderer name={"moon"} width={"50%"} height={"50%"} />
                        </div>
                    </div>
                </header>
                <footer className={navigationsBar.footer}>
                    <ul className={navigationsBar["footer__menu"]}>
                        <li className={navigationsBar["footer__item"]}>Haqqımızda</li>
                        <li className={navigationsBar["footer__item"]}>Xidmətlər</li>
                        <li className={navigationsBar["footer__item"]}>Əlaqə</li>
                    </ul>
                    <span className={navigationsBar["footer__copyright"]}>© JobSearch.az 2006—2023</span>
                    <span className={navigationsBar["site-by"]}>
                        Site  by
                        <div className={navigationsBar.initials}>MI</div>
                        <a className={navigationsBar.portfolio} href="https://portfolio-m1ob.vercel.app/" rel="noreferrer" target="_blank">Mir Ismayil Portfolio</a>
                    </span>
                </footer>
            </div>
            <div className={navigationsBar.resizer}>
                <IconsRenderer name={"resizer"} width={25} height={25} />
            </div>
        </aside>
    )
}
export default NavigationsBar
