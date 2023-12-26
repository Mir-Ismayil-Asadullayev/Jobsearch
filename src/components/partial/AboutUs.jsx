import aboutUs from "../../assets/scss/components/partial/aboutUs.module.scss";

const AboutUs = () => {
    return (
        <div className={aboutUs["about-us-container"]}>
            <h2 className={aboutUs["about-us__title"]}>Haqqımızda</h2>
            <div className={aboutUs["about-us__banner"]}>
                <h1 className={aboutUs["about-us__subtitle"]}>JobSearch.az</h1>
                <p className={aboutUs["about-us__desc"]}>Azərbaycanda iş axtarışı üçün nəzərdə tutulmuş onlayn platformadır.</p>
            </div>
            <p>
                Yarandığı, 2005-ci ildən bu günədək sayt illər boyu reytinq üzrə Azərbaycanda ən populyar iş axtarışı saytı olaraq qalır.
            </p><br />
            <p>
                Biz ilk növbədə iş axtarışında olanlara dəstək olmağa çalışırıq, onlara iş axtarışı və şirkətləri tədqiq etmək üçün təmənnasız imkanlar yaradırıq. Hər gün minlərlə iş axtarışında olan insanlar üçün yeni iş imkanları yaradırılır
            </p><br />
            <p>
                Dəyərli müştərilərimiz olan şirkətlər haqqında da daima düşünürük və onların əmək bazarında daha da yaxşı tanıdılmasında və ən yaxşı namizədlərin tapılmasında dəstək oluruq. Müştərilərimiz arasında beynəlxalq və yerli neft və qeyri-neft şirkətləri, dövlət qurumlarını, maliyyə institutlarını, qeyri-hökümət təşkilatlarını, orta və kiçik sahibkarları və s. yer tutur.
            </p><br />
            <p>
                Saytın istifadəçilərini minlərlə müştərilər və on minlərlə iş axtarışında olan istifadəçilər təşkil edir.
            </p>
        </div>
    )
}
export default AboutUs
