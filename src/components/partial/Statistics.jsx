import IconsRenderer from "../../components/utils/IconsRenderer";
import statistics from "../../assets/scss/components/partial/statistics.module.scss";


const Statistics = () => {
    return (
        <div className={statistics["sponsor"]}>
            <button className={statistics["sponsor__btn"]}>
                <IconsRenderer name={"link"} width={16} height={16} />
                Saytın klassik versiyası
            </button>
            <div className={statistics["sponsor__img"]}>
                <img src="https://storage.jobsearch.az/storage/pages/1/banner-1-jobsearch-2-6.jpg" alt="sponsor" />
            </div>
            <p className={statistics["statistics__title"]}>Saytda dərc edilmiş vakansiyaların sayı</p>
            <div className={statistics["statistics"]}>
                <div className={statistics["statistics__info"]}>
                    <div className={statistics["statistics__item"]}>
                        <div>Günlük</div>
                        <div>0</div>
                    </div>
                    <div className={statistics["statistics__item"]}>
                        <div>Həftəlik</div>
                        <div>73</div>
                    </div>
                </div>
                <div className={statistics["statistics__total"]}>
                    <span>Aylıq</span>
                    <div>1564</div>
                </div>
            </div>
        </div>
    )
}
export default Statistics
