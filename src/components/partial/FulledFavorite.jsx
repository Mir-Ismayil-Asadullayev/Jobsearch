import fulledFavorite from "../../assets/scss/components/partial/fulledFavorite.module.scss";
import IconsRenderer from "../../components/utils/IconsRenderer";

const FulledFavorite = () => {
    return (
        <>
            <div className={fulledFavorite["favorite"]}>
                <h2>My favorite vacancies</h2>
            </div>
            <div className={fulledFavorite["no-favorite-container"]}>
                <div className={fulledFavorite["no-favorite"]}>
                    <IconsRenderer name={"empty favorite"} width={27} height={24} />
                </div>
                <h1>Sizin seçilmiş elanınız yoxdur</h1>
                <button className={fulledFavorite["view-vacancies"]}>Vakansiyalara keçid</button>
            </div>
        </>
    )
}
export default FulledFavorite
