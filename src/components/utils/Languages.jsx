import languages from '../../assets/scss/utils/languages.module.scss';

const Languages = () => {

    return (
        <div className={languages.languages}>
            <div className={languages['languages__active']}>
                AZ
                <span className={languages['arrow-down']}></span>
            </div>
            <div className={languages['languages__container']}>
                <div className={languages['languages__rest']}>
                    EN
                </div>
                <div className={languages['languages__rest']}>
                    RU
                </div>
            </div>
        </div>
    )
}
export default Languages
