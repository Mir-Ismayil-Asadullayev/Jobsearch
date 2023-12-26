import categories from "../../assets/scss/components/partial/categories.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Categories = () => {
    return (
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
    )
}
export default Categories
