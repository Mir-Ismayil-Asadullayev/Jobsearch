import favorite from "../../assets/scss/components/partial/favorite.module.scss";
import IconsRenderer from "../utils/IconsRenderer";


const Favorite = () => {
    return (
        <>
            <div className={favorite["favorite"]}>
                <h2>Seçdiyim iş elanları</h2>
            </div>
            <div className={favorite["main-items"]}>
                <div className={favorite["main-items__item"]}>
                    <div className={favorite["main-items__info"]}>
                        <div className={favorite["main-items__img"]}>
                            <IconsRenderer name={"Logistika"} width={42} height={42} />
                        </div>
                        <div className={favorite["main-items__name"]}>
                            <h3>Network administrator</h3>
                            Company
                        </div>
                    </div>
                    <div className={favorite["main-items__status"]}>
                        <div className={favorite["main-items__currency"]}>
                            <IconsRenderer name={"manat"} width={13} height={13} />

                        </div>
                        <div className={favorite["main-items__watched"]}>
                            <IconsRenderer name={"eye"} width={15} height={15} />
                            888
                        </div>
                        <div className={favorite["main-items__date"]}>20 Dek</div>
                        <div className={favorite["main-items__like"]}>
                            <IconsRenderer name={"empty heart"} width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Favorite
