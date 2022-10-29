import '../index.css';

function Navbar() {
  return (
    <header className="header">
      <ul className='navList'>
        <li className='navItem'>
          <a href='#'>TENTANG</a>
        </li>
        <li className='navItem'>
          <a href='#'>BERITA</a>
        </li>
        <li className='navBrand'>AmpuTv</li>
        <li className='navItem'>
          <a href='#'>SEJARAH</a>
        </li>
        <li className='navItem'>
          <a href='#'>KONTAK</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;