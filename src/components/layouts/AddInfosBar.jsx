import addInfosBar from "../../assets/scss/components/layouts/addInfosBar.module.scss";
// import Company from "../partial/Company";
// import Vacancy from "../partial/Vacancy";
import Statistics from "../partial/Statistics";

const AddInfosBar = () => {
    return (
        <aside className={addInfosBar["add-infos-container"]}>
            <Statistics />
            {/* <Vacancy /> */}
            {/* <Company /> */}
        </aside>
    )
}
export default AddInfosBar
