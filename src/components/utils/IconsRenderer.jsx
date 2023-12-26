/* eslint-disable react/prop-types */
import { v1 as uuidv1 } from "uuid";
import IconsArray from "../../services/data/IconsDB";

const IconsRenderer = ({ name, width, height }) => {
    return IconsArray.map(item => {
        if (item.IconName === name)
            return <div
                style={{ width: width, height: height, overflow: "hidden" }}
                key={uuidv1()}>
                {item.Icon}
            </div>
    })
}
export default IconsRenderer;
