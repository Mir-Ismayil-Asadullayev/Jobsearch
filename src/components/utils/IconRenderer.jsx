/* eslint-disable react/prop-types */
import { v1 as uuidv1 } from 'uuid';
import IconArray from '../../services/data/IconsDB.jsx';

const IconRenderer = ({ name, width, height }) => {
    return IconArray.map(item => {
        if (item.IconName === name)
            return <div
                style={{ width: width, height: height, overflow: 'hidden' }}
                key={uuidv1()}>
                {item.Icon}
            </div>
    })
}
export default IconRenderer
