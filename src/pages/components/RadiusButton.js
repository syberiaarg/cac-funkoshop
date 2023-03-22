import styles from './styles/RadiusButton.module.css'

const RadiusButton = ({ str, bgColor, textColor }) => (

    <div
        style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
        className={styles.button}>
        <span>{str}</span>
    </div>


)


export default RadiusButton
