import industries from "../../assets/scss/components/partial/industries.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Industries = () => {
    return (
        <>
            <div className={industries["filter-bar"]}>
                <form className={industries["filter-bar__search-form"]}>
                    <input type="text" className={industries["filter-bar__input"]} placeholder="Sənayelər üzrə axtarış..." />
                    <button className={industries["filter-bar__btn"]} type="button">
                        <IconsRenderer name={"search"} width={17} height={17} />
                    </button>
                </form>
                <div className={industries["filter-bar__filter"]}>
                    <IconsRenderer name={"filter"} width={17} height={17} />
                    <span className={industries["filter-bar__text"]}>Filterlər</span>
                </div>
                <div className={industries["filter-bar__filters"]}>
                    <div className={industries["filter-bar__choices"]}>
                        Tarixə görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={industries["filter-bar__choices"]}>
                        Maaş üzrə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={industries["filter-bar__choices"]}>
                        Baxış sayına görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                </div>
            </div>
            <div className={industries["main-items"]}>
                <div className={industries["main-items__item"]}>
                    <div className={industries["main-items__info"]}>
                        <div className={industries["main-items__img"]}>
                            <IconsRenderer name={"financial"} width={24} height={24} />
                        </div>
                        <div className={industries["main-items__name"]}>
                            <h3>Maliyyə xidmətləri</h3>
                            <span>39 şirkət</span>
                        </div>
                    </div>
                    <div className={industries["main-items__status"]}>244 iş elanı</div>
                </div>
            </div>
        </>
    )
}
export default Industries
