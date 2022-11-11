import headphones from '../../assets/headphones_logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Beats4Devs</h1>
            <img src={headphones} alt='headphones logo' />
            <button className='button-container'>P L A Y L I S T</button>
      </header>
    )
}

export default Header