import contacts from "../../assets/scss/components/partial/contacts.module.scss";

const Contacts = () => {
    return (
        <div className={contacts["contacts-container"]}>
            <h1>Əlaqə</h1>
            <div className={contacts["contacts-text"]}>
                <h2>Ünvan</h2>
                <p>
                    8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə. Bakı, AZ 1025, Azərbaycan
                </p>
            </div>
            <iframe
                width="100%"
                height="260"
                style={{ border: "none" }}
                src="https://maps.google.com/maps?q=40.37855161295164,49.87445802697999&amp;hl=en&amp;z=14&amp;output=embed">
            </iframe>
            <div className={contacts["contacts-text"]}>
                <h2>Telefon</h2>
                <p>
                    <p>+994 12 434 50 30</p>
                    <p>+994 12 488 64 91</p>
                    <p>+994 12 488 64 92</p>
                </p>
            </div>
            <div className={contacts["contacts-text"]}>
                <h2>Mobil</h2>
                <p>
                    <p>+994 50 205 66 20</p>
                    <p>+994 50 208 90 25</p>
                </p>
            </div>
            <div className={contacts["contacts-text"]}>
                <h2>E-mail</h2>
                <p>
                    info@jobsearch.az
                </p>
            </div>
        </div>
    )
}
export default Contacts
