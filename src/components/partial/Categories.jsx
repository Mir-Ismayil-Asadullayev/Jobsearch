import categories from "../../assets/scss/components/partial/categories.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Categories = () => {
    return (
        <>
            <div className={categories["filter-bar"]}>
                <form className={categories["filter-bar__search-form"]}>
                    <input type="text" className={categories["filter-bar__input"]} placeholder="Kateqoriyalar üzrə axtarış..." />
                    <button className={categories["filter-bar__btn"]} type="button">
                        <IconsRenderer name={"search"} width={17} height={17} />
                    </button>
                </form>
                <div className={categories["filter-bar__filter"]}>
                    <IconsRenderer name={"filter"} width={17} height={17} />
                    <span className={categories["filter-bar__text"]}>Filterlər</span>
                </div>
                <div className={categories["filter-bar__filters"]}>
                    <div className={categories["filter-bar__choices"]}>
                        Tarixə görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={categories["filter-bar__choices"]}>
                        Maaş üzrə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={categories["filter-bar__choices"]}>
                        Baxış sayına görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                </div>
            </div>
            <div className={categories["main-items"]}>
                <div className={categories["main-items__item"]}>
                    <div className={categories["main-items__info"]}>
                        <div className={categories["main-items__img"]}>
                            <IconsRenderer name={"business"} width={20} height={17} />
                        </div>
                        <div className={categories["main-items__name"]}>
                            <h3>İnzibati, biznes və idarə etmə</h3>
                            <span>524 is elani</span>
                        </div>
                    </div>
                    <div className={categories["main-items__status"]}>525 sirket</div>
                </div>
            </div>
        </>

    )
}
export default Categories
