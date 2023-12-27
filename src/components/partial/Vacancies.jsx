import logo from "../../assets/images/lock-377930.jpg";
import vacancies from "../../assets/scss/components/partial/vacancies.module.scss";
import IconsRenderer from "../utils/IconsRenderer";

const Vacancies = () => {
    return (
        <>
            <div className={vacancies["filter-bar"]}>
                <form className={vacancies["filter-bar__search-form"]}>
                    <input type="text" className={vacancies["filter-bar__input"]} placeholder="Vakansiyalar üzrə axtarış..." />
                    <button className={vacancies["filter-bar__btn"]} type="button">
                        <IconsRenderer name={"search"} width={17} height={17} />
                    </button>
                </form>
                <div className={vacancies["filter-bar__filter"]}>
                    <IconsRenderer name={"filter"} width={17} height={17} />
                    <span className={vacancies["filter-bar__text"]}>Filterlər</span>
                </div>
                <div className={vacancies["filter-bar__filters"]}>
                    <div className={vacancies["filter-bar__choices"]}>
                        Tarixə görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={vacancies["filter-bar__choices"]}>
                        Maaş üzrə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                    <div className={vacancies["filter-bar__choices"]}>
                        Baxış sayına görə
                        <IconsRenderer name={"checked"} width={15} height={15} />
                    </div>
                </div>
            </div>
            <div className={vacancies["main-items"]}>
                <div className={vacancies["main-items__item"]}>
                    <div className={vacancies["main-items__info"]}>
                        <div className={vacancies["main-items__img"]}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={vacancies["main-items__name"]}>
                            <h3>Network administrator</h3>
                            Company
                        </div>
                    </div>
                    <div className={vacancies["main-items__status"]}>
                        <div className={vacancies["main-items__currency"]}>
                            <IconsRenderer name={"manat"} width={13} height={13} />

                        </div>
                        <div className={vacancies["main-items__watched"]}>
                            <IconsRenderer name={"eye"} width={15} height={15} />
                            888
                        </div>
                        <div className={vacancies["main-items__date"]}>20 Dek</div>
                        <div className={vacancies["main-items__like"]}>
                            <IconsRenderer name={"empty heart"} width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Vacancies
