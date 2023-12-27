import mainItemsBar from "../../assets/scss/components/layouts/mainItemsBar.module.scss";
import IconsRenderer from "../utils/IconsRenderer";
// import FulledFavorite from "../partial/FulledFavorite";
// import Contacts from "../partial/Contacts";
// import Services from "../partial/Services";
// import AboutUs from "../partial/AboutUs";
import Subscription from "../partial/Subscription";
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
            {/* <FulledFavorite /> */}
            {/* <Vacancies /> */}
            {/* <Categories /> */}
            {/* <Industries /> */}
            {/* <Companies /> */}
            {/* <Favorite /> */}
            <Subscription />
            {/* <AboutUs /> */}
            {/* <Services /> */}
            {/* <Contacts /> */}
            <div className={mainItemsBar.resizer}>
                <IconsRenderer name={"resizer"} width={25} height={25} />
            </div>
        </main>
    )
}
export default MainItemsBar
