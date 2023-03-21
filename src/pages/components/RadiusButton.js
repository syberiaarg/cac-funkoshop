import styles from './styles/RadiusButton.module.css'

const RadiusButton = ({ str }) => (

    <div
        style={{ 'background-color': '#000000', color: '#FFF' }}
        className={styles.button}>
        <span>{str}</span>
    </div>


)

export default RadiusButton
