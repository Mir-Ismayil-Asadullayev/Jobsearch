import industries from "../../assets/scss/components/partial/industries.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Industries = () => {
    return (
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
    )
}
export default Industries
