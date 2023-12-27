import vacancy from "../../assets/scss/components/partial/vacancy.module.scss";
import IconsRenderer from '../../components/utils/IconsRenderer';

const Vacancy = () => {
    return (
        <div className={vacancy["vacancy"]}>
            <div className={vacancy["vacancy__header"]}>
                <div className={vacancy['vacancy__name']}>
                    <IconsRenderer name={'Xalq Bank'} width={28} height={28} />
                    A2Z Technologies
                </div>
                <div className={vacancy['vacancy__status']}>
                    <IconsRenderer name={'eye'} width={19} height={16} />
                    777
                    <IconsRenderer name={'empty heart'} width={20} height={20} />
                </div>
            </div>
            <div className={vacancy['vacancy__info']}>
                <h1 className={vacancy['vacancy__title']}>Project Manager</h1>
                <span className={vacancy['vacancy__date']}>
                    <IconsRenderer name={'clock'} width={18} height={18} />
                    Son tarix 26 yan 2024
                </span>
                <span className={vacancy["vacancy__industry"]}>Inzibati, Biznes və İdarəetmə</span>
            </div>
            <div className={vacancy['vacancy__tab']}>
                <div className={vacancy['vacancy__tab-links']}>
                    <span>İşin təsviri</span>
                    <span>Digər iş elanları</span>
                </div>
                <div className={vacancy['vacancy__tab-content']}>
                    <div className={vacancy['vacancy__tab-text']}>
                        <h4 className={vacancy['vacancy__tab-title']}>İş barədə məlumat:</h4>
                        <ul>
                            <li>
                                Tələb olunan müqavilələrin, hüquqi məsələlərlə bağlı məktubların, ərizələrin, şikayətlərin və digər hüquqi sənədlərin hazırlanması;
                            </li>
                            <li>
                                Təqdim edilmiş müqavilələrin hüquqi ekspertizasının aparılması və hüquqi rəyin yazılması;
                            </li>
                            <li>
                                Hüquqi şəxsin təsis sənədlərinin və qanunvericlik əsasında digər zəruri sənədlərinin hazırlanması;
                            </li>
                            <li>
                                Əmək qanunvericliyinə əsasən zəruri sənədlərin hazırlanması;
                            </li>
                            <li>
                                Müəssisədaxili fəaliyyəti tənzimləyən normativ sənədlərə düzəliş və əlavələr edilməsi barədə təkliflərin hazırlanması;
                            </li>
                            <li>
                                Müdafiə və ya ittiham xarakterli məhkəmə işlərinin məqsədə uyğunluğunu müəyyən etmək üçün hüquqi sənədləri nəzərdən keçirilməsi və hüquqi rəyin hazırlanması;
                            </li>
                            <li>
                                İddia ərizələrinin, apellyasiya və kassasiya şikayətlərinin yazılması;
                            </li>
                            <li>
                                Məhkəmələrdə və ya dövlət orqanları qarşısında Cəmiyyətin təmsil edilməsi, cəmiyyətin və ya cəmiyyətin əməkdaşlıq etdiyi şəxslərin icrası bitmiş məhkəmə işlərinin hesabatlarının hazırlanması;
                            </li>
                            <li>
                                Əqli mülkiyyət qanunlarına, Miqrasiya Məcəlləsinə, Azərbaycan Respublikasının qanunvericliyi ilə müəyyən olunmuş hallarda sahibkarlıq fəaliyyəti ilə məşğul olmaq üçün xüsusi icazə (lisenziya) sənədlərin alınması üçün müvafiq sənədlərin hazırlanması və müvafiq qurumlara müraciətin edilməsi, Cəmiyyətin təmsil olunması;
                            </li>
                            <li>
                                Rəhbərliyin hüquqi işlərlə əlaqəli vermiş olduğu təlimatlarının yerinə yetirilməsi.
                            </li>
                        </ul>
                        <h4 className={vacancy['vacancy__tab-title']}>Vəzifəyə dair tələblər:</h4>
                        <ul>
                            <li>
                                Hüquq fakultəsi üzrə bakalavr ali təhsili;
                            </li>
                            <li>
                                Azərbaycan Respublikası Mülki, Mülki Prosessual, İnzibati, İnzibati Prosessual, Əmək Məcəllələrini yüksək səviyyədə bilməli;
                            </li>
                            <li>
                                Azərbaycan dilində sərbəst və səlist danışıq və yazı yazmaq bacarığı (ingilis dili və rus dili üstünlükdür);
                            </li>
                            <li>
                                Layihə hazırlamaq, hüquqi təhlil və danışıqlar aparmaq bacarığı;
                            </li>
                            <li>
                                Detallara yüksək diqqət;
                            </li>
                            <li>
                                MS Office proqramlarını (Word, Excel, Power Point), xüsusilə Word yüksək səviyyədə bilməli;
                            </li>
                            <li>
                                Hüquq sahəsi üzrə təcrübəsi olan namizədlərə üstünlük verilir.
                            </li>
                        </ul>
                        <h4 className={vacancy['vacancy__tab-title']}>Bacarıq və səriştələr:</h4>
                        <ul>
                            <li>
                                Ünsiyyətcil olmalı;
                            </li>
                            <li>
                                Komanda ruhlu olmalı;
                            </li>
                            <li>
                                Öyrənməyə həvəsli olmalı, peşəsi ilə bağlı yenilikləri işinə tətbiq edə bilməli;
                            </li>
                            <li>
                                Aktiv və məsuliyyətlilik kimi xarakterik xüsusiyyətlərə sahib olmalı;
                            </li>
                            <li>
                                Təşəbbüskarlıq, operativlik, punktuallıq və kreativlik kimi peşəkar vərdişlərə sahib olmalı;
                            </li>
                            <li>
                                Son tarixlərlə işləməyi bacarmalı və verilən tapşırıqları vaxtında icra etməlidir;
                            </li>
                            <li>
                                Problemləri həll etmə bacarığı olmalıdır.
                            </li>
                        </ul>
                        <h4 className={vacancy['vacancy__tab-title']}>BERC şirkətlər qrupu sizə nə vəd edir?</h4>
                        <ul>
                            <li>
                                Əmək Məcəlləsinə uyğun həftəlik 40 saatdan çox olmayan iş rejimi;
                            </li>
                            <li>
                                Şirkətdə və xidmət göstərdiyi müəssisələrdə karyera yüksəlişi imkanı ;
                            </li>
                            <li>
                                Rəqabət qabiliyyətli əmək haqqı.
                            </li>
                        </ul>
                        <div className={vacancy['vacancy__add-info']}>
                            Qeyd olunan tələblərə uyğun gələn namizədlərdən öz CV-lərini <strong>26.01.2024-cü</strong> il tarixinədək elektron ünvanına mövzu yerinə <strong>əmək haqqı gözləntisini və “kiçik hüquqşünas”</strong>vəzifəsi yazaraq göndərmələri xahiş olunur. Yalnız seçilmiş namizədlər müsahibəyə dəvət olunacaqlar.
                        </div>
                        <div>
                            Qeyd: İlkin göndərilmiş CV-lər əsasında son müraciət tarixindən daha tez imtahan təşkil edilə bilər.
                        </div>
                    </div>
                    <div className={vacancy['vacancy__subscribe']}>
                        <IconsRenderer name={'telegram'} width={40} height={40} />
                        <p className={vacancy['vacancy__subscribe-text']}>
                            Vakansiyalar barədə məlumatı ən tez bizim <strong>Telegram kanalında</strong> izləyə bilərsiniz.
                        </p>
                    </div>
                    <div className={vacancy['vacancy__buttons']}>
                        <div>
                            <IconsRenderer name={'print'} width={20} height={20} />
                            <div>Çap et</div>
                        </div>
                        <div>
                            <IconsRenderer name={'complain'} width={20} height={20} />
                            <div>Şikayət et</div>
                        </div>
                    </div>
                </div>
                <button className={vacancy['vacancy__apply']}>
                    <IconsRenderer name={'apply'} width={15.5} height={15.5} />
                    Müraciət et
                </button>
            </div>
        </div>
    )
}



export default Vacancy
