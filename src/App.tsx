import './App.css';
import BannerProducts from './components/banner-products/BannerProducts';
import BannerSupermarket from './components/banner-supermarket/BannerSupermarket';
import Disclaimer from './components/disclaimer/Disclaimer';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';

const App = () => {
  return (
    <>
      <Disclaimer />
      <Menu />
      <BannerSupermarket />
      <BannerProducts />
      <Footer />
    </>
  );
}

export default App;
