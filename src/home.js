import './App.css';
import Navigation from './navigation';

function Home() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/little_lemon_logo.jpg'} alt="Little Lemon Logo" />
        </div>
        <Navigation></Navigation>          
      </header>

      <main>
        <article>
          <div className="promo-banner">
            <img src={process.env.PUBLIC_URL + '/img/promo_banner.jpg'} alt="Specials at Little Lemon" />
          </div>
        </article>

        <section className="three-columns">
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/img/appetizer.jpg'} alt="Appetizer at Little Lemon" />
            <h2>Appetizers</h2>
            <p>Delight your taste buds with our exquisite appetizers, crafted with fresh and locally sourced ingredients.</p>
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/img/main_course.jpg'} alt="Main Course at Little Lemon" />
            <h2>Main Courses</h2>
            <p>Indulge in our flavorful main courses, each prepared to perfection and served with a touch of Little Lemon's magic.</p>
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + '/img/dessert.jpg'} alt="Dessert at Little Lemon" />
            <h2>Desserts</h2>
            <p>Complete your meal on a sweet note with our heavenly desserts, handcrafted to satisfy your cravings.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-column">
          <img src={process.env.PUBLIC_URL + '/img/little_lemon_logo_small.jpg'} alt="Little Lemon Small Logo" />
        </div>
        <div className="footer-column">
          <p>&copy; 2023 Little Lemon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
