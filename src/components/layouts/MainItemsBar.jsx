import mainItemsBar from "../../assets/scss/components/layouts/mainItemsBar.module.scss";
import FulledFavorite from "../partial/FulledFavorite";
// import Contacts from "../partial/Contacts";
// import Services from "../partial/Services";
// import AboutUs from "../partial/AboutUs";
// import Subscription from "../partial/Subscription";
// import Favorite from "../partial/Favorite";
// import IconsRenderer from "../utils/IconsRenderer";
// import Companies from "../partial/Companies";
// import Industries from "../partial/Industries";
// import Categories from "../partial/Categories";
// import Vacancies from "../partial/Vacancies";
// import IconsRenderer from "../utils/IconsRenderer";

const MainItemsBar = () => {
    return (
        <main className={mainItemsBar["main-items-container"]}>
            {/* <div className={mainItemsBar["filter-bar"]}>
                <form className={mainItemsBar["filter-bar__search-form"]}>
                    <input type="text" className={mainItemsBar["filter-bar__input"]} placeholder="Sayt üzrə axtarış..." />
                    <button className={mainItemsBar["filter-bar__btn"]} type="button">
                        <IconsRenderer name={"search"} width={17} height={17} />
                    </button>
                </form>
                <div className={mainItemsBar["filter-bar__filter"]}>
                    <IconsRenderer name={"filter"} width={17} height={17} />
                    <span className={mainItemsBar["filter-bar__text"]}>Filterlər</span>
                </div>
                <div className={mainItemsBar["filter-bar__filters"]}>
                    <div className={mainItemsBar["filter-bar__choices"]}>
                        Tarixə görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={mainItemsBar["filter-bar__choices"]}>
                        Maaş üzrə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={mainItemsBar["filter-bar__choices"]}>
                        Baxış sayına görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                </div>
            </div> */}


            <FulledFavorite />
            {/* <Vacancies /> */}
            {/* <Categories /> */}
            {/* <Industries /> */}
            {/* <Companies /> */}
            {/* <Favorite /> */}
            {/* <Subscription /> */}
            {/* <AboutUs /> */}
            {/* <Services /> */}
            {/* <Contacts /> */}
        </main>
    )
}
export default MainItemsBar
