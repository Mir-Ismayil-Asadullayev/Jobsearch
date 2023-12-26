import companies from "../../assets/scss/components/partial/companies.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Companies = () => {
    return (
        <div className={companies["main-items"]}>
            <div className={companies["main-items__item"]}>
                <div className={companies["main-items__info"]}>
                    <div className={companies["main-items__img"]}>
                        <IconsRenderer name={"Xalq Bank"} width={36} height={36} />
                    </div>
                    <div className={companies["main-items__name"]}>
                        <h3>Xalq Bank</h3>
                        <span> Maliyyə xidmətləri, Banklar</span>
                    </div>
                </div>
                <div className={companies["main-items__status"]}>525 is elani</div>
            </div>
        </div>
    )
}
export default Companies
