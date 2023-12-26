import addInfosBar from "../../assets/scss/components/layouts/addInfosBar.module.scss";
import IconsRenderer from "../../components/utils/IconsRenderer";

const AddInfosBar = () => {
    return (
        <aside className={addInfosBar["add-infos-container"]}>
            <div className={addInfosBar["sponsor"]}>
                <button className={addInfosBar['sponsor__btn']}>
                    <IconsRenderer name={'link'} width={16} height={16} />
                    Saytın klassik versiyası
                </button>
                <div className={addInfosBar['sponsor__img']}>
                    <img src="https://storage.jobsearch.az/storage/pages/1/banner-1-jobsearch-2-6.jpg" alt="sponsor" />
                </div>
                <p>Saytda dərc edilmiş vakansiyaların sayı</p>
                <div className={addInfosBar['statistics']}>
                    <p>Saytda dərc edilmiş vakansiyaların sayı</p>
                    <div className={addInfosBar['statistics__block']}>
                        <div className={addInfosBar['statistics__info']}>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default AddInfosBar
