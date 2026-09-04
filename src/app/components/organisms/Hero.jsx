export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-label">
          EXPLORE • DISCOVER • EXPERIENCE
        </p>

        <h1>
          Discover the Heritage of Pangasinan
        </h1>

        <p className="hero-description">
          Explore the rich history, beautiful destinations,
          traditions, and culture that make Pangasinan unique.
        </p>

        <a
          href="#destinations"
          className="hero-button"
        >
          Explore Pangasinan
        </a>

      </div>

      <div className="hero-image">
        <img
          src="/tourist/images/hero.jpg"
          alt="Beautiful scenery in Pangasinan"
        />
      </div>

    </section>
  );
}