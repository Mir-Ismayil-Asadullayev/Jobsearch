import companies from "../../assets/scss/components/partial/companies.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Companies = () => {
    return (
        <>
            <div className={companies["filter-bar"]}>
                <form className={companies["filter-bar__search-form"]}>
                    <input type="text" className={companies["filter-bar__input"]} placeholder="Şirkətlər üzrə axtarış..." />
                    <button className={companies["filter-bar__btn"]} type="button">
                        <IconsRenderer name={"search"} width={17} height={17} />
                    </button>
                </form>
                <div className={companies["filter-bar__filter"]}>
                    <IconsRenderer name={"filter"} width={17} height={17} />
                    <span className={companies["filter-bar__text"]}>Filterlər</span>
                </div>
                <div className={companies["filter-bar__filters"]}>
                    <div className={companies["filter-bar__choices"]}>
                        Tarixə görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={companies["filter-bar__choices"]}>
                        Maaş üzrə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={companies["filter-bar__choices"]}>
                        Baxış sayına görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                </div>
            </div>
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
        </>
    )
}
export default Companies
