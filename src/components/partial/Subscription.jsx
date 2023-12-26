import subscription from "../../assets/scss/components/partial/subscription.module.scss";


const Subscription = () => {
    return (
        <div className={subscription["subscribe-container"]}>
            <div className={subscription["subscribe-form"]}>
                <h2 className={subscription["subscribe-form__title"]}>Abunə olduğum kateqoriyalar</h2>
                <span className={subscription["subscribe-form__subtitle"]}>Abunə olmaq üçün kateqoriyaları seç</span>
                <form className={subscription["subscribe-form__form"]}>
                    <input type="text" className={subscription["subscribe-form__input"]} placeholder="myemailaddress@mail.com" />
                </form>
            </div>
            <div className={subscription["subscribe-item__item"]}>
                <div className={subscription["subscribe-item__info"]}>
                    <input type="checkbox" className={subscription["subscribe-item__input"]} />
                    <div className={subscription["subscribe-item__name"]}>
                        <h3>Maliyyə xidmətləri</h3>
                        <span>39 şirkət</span>
                    </div>
                </div>
                <div className={subscription["subscribe-item__status"]}>244 iş elanı</div>
            </div>
            <button className={subscription["subscribe-container__save-btn"]}>Yadda Saxla</button>
        </div>
    )
}
export default Subscription
