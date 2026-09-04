import "./destinations.css";

export default function Destinations() {
  return (
    <main className="destinations-site">

      <header>
        <nav>
          <h2>Pangasinan Heritage</h2>

          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/heritage">Heritage</a>
            <a href="/destinations">Destinations</a>
            <a href="/faces">Faces</a>
          </div>
        </nav>
      </header>

      <section className="destinations-page">

        <div className="destinations-header">
          <p className="section-label">
            PLACES TO DISCOVER
          </p>

          <h1>
            Explore Pangasinan
          </h1>

          <p className="section-description">
            Discover the breathtaking destinations, natural
            wonders, and cultural treasures that make
            Pangasinan a remarkable place to explore.
          </p>
        </div>

        <div className="destination-grid">

          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/hundred-island.jpg"
                alt="Hundred Islands in Alaminos, Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                ALAMINOS, PANGASINAN
              </p>

              <h2>Hundred Islands</h2>

              <p>
                Explore the famous Hundred Islands National
                Park, known for its beautiful limestone islands,
                clear waters, and breathtaking coastal scenery.
              </p>

              <a
                href="/destinations/hundred-islands"
                className="destination-button"
              >
                Explore Hundred Islands
              </a>
            </div>
          </article>


          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/bolinao.jpg"
                alt="Bolinao, Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                BOLINAO, PANGASINAN
              </p>

              <h2>Bolinao</h2>

              <p>
                Discover the coastal beauty of Bolinao through
                its beaches, waterfalls, caves, rock formations,
                and historic lighthouse.
              </p>

              <a
                href="/destinations/bolinao"
                className="destination-button"
              >
                Explore Bolinao
              </a>
            </div>
          </article>


          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/cabongaoan.jpg"
                alt="Cabongaoan Beach in Burgos, Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                BURGOS, PANGASINAN
              </p>

              <h2>Cabongaoan Beach</h2>

              <p>
                Experience the peaceful coastal scenery of
                Cabongaoan, known for its beautiful beach,
                dramatic rock formations, and natural landscapes.
              </p>

              <a
                href="/destinations/cabongaoan"
                className="destination-button"
              >
                Explore Cabongaoan
              </a>
            </div>
          </article>


          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/patar-beach.jpg"
                alt="Patar Beach in Bolinao, Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                BOLINAO, PANGASINAN
              </p>

              <h2>Patar Beach</h2>

              <p>
                Relax along the golden shoreline of Patar Beach
                and enjoy beautiful sunset views along the
                western coast of Pangasinan.
              </p>

              <a
                href="/destinations/patar"
                className="destination-button"
              >
                Explore Patar Beach
              </a>
            </div>
          </article>


          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/cape-bolinao.jpg"
                alt="Cape Bolinao Lighthouse in Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                BOLINAO, PANGASINAN
              </p>

              <h2>Cape Bolinao Lighthouse</h2>

              <p>
                Visit one of Pangasinan's well-known historical
                landmarks and enjoy panoramic views of the
                surrounding coastline.
              </p>

              <a
                href="/destinations/cape-bolinao"
                className="destination-button"
              >
                Explore Lighthouse
              </a>
            </div>
          </article>


          <article className="destination-card">
            <div className="destination-image">
              <img
                src="/images/tondol-beach.jpg"
                alt="Tondol Beach in Anda, Pangasinan"
              />
            </div>

            <div className="destination-content">
              <p className="card-location">
                ANDA, PANGASINAN
              </p>

              <h2>Tondol Beach</h2>

              <p>
                Enjoy the shallow waters and wide sandy shoreline
                of Tondol Beach, a popular destination for
                families and visitors.
              </p>

              <a
                href="/destinations/tondol"
                className="destination-button"
              >
                Explore Tondol Beach
              </a>
            </div>
          </article>

        </div>
      </section>

      <section className="destination-cta">
        <p className="section-label">
          EXPERIENCE PANGASINAN
        </p>

        <h2>Your Next Story Starts Here.</h2>

        <p>
          Discover the landscapes, communities, history,
          and experiences waiting for you across Pangasinan.
        </p>

        <a href="/" className="cta-button">
          Back to Home
        </a>
      </section>

      <footer>
        <div className="footer-content">

          <h2>Pangasinan Heritage</h2>

          <p>
            Discover the places, people, stories,
            and traditions of Pangasinan.
          </p>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/heritage">Heritage</a>
            <a href="/destinations">Destinations</a>
            <a href="/faces">Faces</a>
          </div>

          <p className="copyright">
            © 2026 Pangasinan Heritage. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}