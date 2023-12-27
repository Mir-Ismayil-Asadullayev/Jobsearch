import company from '../../assets/scss/components/partial/company.module.scss';

const Company = () => {
    return (
        <div className={company['company']}>
            <div className={company['company__cover-img']}>
                <img src="https://storage.jobsearch.az/storage/pages/5955/careerspage-banner.jpg" alt="cover" />
            </div>
            <div className={company['company__body']}>
                <div className={company['company__logo']}>
                    <img src="https://storage.jobsearch.az/storage/pages/5955/pasha-bank-mini.svg" alt="logo" />
                </div>
                <div className={company['company__heading']}>
                    <h1 className={company['company__title']}>PASHA Bank</h1>
                    <div className={company['company__heading-links']}>
                        <a href="#">Maliyyə xidmətləri</a> ,
                        <a href="#">Banklar</a> ,
                        <a href="#">Kapital bazarı</a>
                    </div>
                </div>
                <div className={company['company__tab']}>
                    <div className={company['company__tab-links']}>
                        <a href="#">Şirkət haqqında</a>
                        <a href="#">Son iş elanları</a>
                    </div>
                    <div className={company['company__tab-content']}>
                        <h4>Şirkət haqqında</h4>
                        <p>
                            2007-ci ildə yaradılmış PAŞA Bank Azərbaycanın aparıcı korporativ bankıdır. Biz investisiya bankçılığı, ticarətin maliyyələşdirilməsi, aktivlərin idarə edilməsi də daxil olmaqla əsas maliyyə xidmətlərini, o cümlədən kiçik və orta sahibkarlıq üçün tam xidmətlər dəstini təklif edirik. Bank iqtisadiyyatın qeyri-neft sektorunun əsas sahələrinə - aqrobiznes, nəqliyyat, tikinti, ticarət və Azərbaycan iqtisadiyyatının müxtəlifliyinə öz töhfəsini verən digər sahələrə xidmət göstərir.
                        </p>
                        <p>
                            PAŞA Bank kapital səviyyəsinə görə Azərbaycanın ən iri özəl bankıdır, həmçinin aktivlərinin həcminə görə TOP-3 özəl bankları siyahısına daxildir. 30 dekabr 2020-ci il tarixinə olan göstəricilərə görə bankın kapitalı 559 milyon AZN-dən artıq, aktivlərinin səviyyəsinə görə isə 5,516 milyon AZN*-dən çox olmuşdur. Aparıcı banklardan biri olan PAŞA Bank davamlı və stabil inkişaf göstəricilərini daha da möhkəmləndirməkdədir. Rəqəmlərlə bağlı ətraflı məlumatı `Maliyyə hesabatlar` bölməsindən əldə edə bilərsiniz.
                        </p>
                        <div className={company['company__tab-info']}>
                            <div className={company['company__tab-location']}>
                                <img src="https://www.jobsearch.az/_nuxt/img/map.b13c9d5.png" alt="location" />
                            </div>
                            <ul>
                                <li>
                                    <span>Ünvan</span>
                                    <div>AZ1005, Bakı ş., Səbail r-nu, Yusif Məmmədəliyev küç. 13</div>
                                </li>
                                <li>
                                    <span>Əlaqə nömrəsi</span>
                                    <div>*8123 / (+994 12) 496 50 04 , (+994 12) 496 51 00</div>
                                </li>
                                <li>
                                    <span>Vebsayt</span>
                                    <div>www.pashabank.az/lang ,az/</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Company
