export default function Fishermen() {
  return (
    <main className="destination-detail">

      <style>{`
        .destination-detail {
          min-height: 100vh;
          background: #f5f7f2;
          color: #1f2933;
        }

        .destination-detail * {
          box-sizing: border-box;
        }

        .detail-header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 20px 60px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .detail-nav {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-logo {
          color: #14532d;
          font-size: 24px;
          font-weight: 700;
          text-decoration: none;
        }

        .detail-links {
          display: flex;
          gap: 30px;
        }

        .detail-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
        }

        .detail-links a:hover {
          color: #15803d;
        }

        .detail-hero {
          max-width: 1280px;
          margin: auto;
          padding: 70px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .detail-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .detail-hero h1 {
          color: #14532d;
          font-size: 58px;
          line-height: 1.05;
          margin: 15px 0 22px;
        }

        .detail-intro {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.8;
        }

        .detail-location {
          margin-top: 25px;
          font-weight: 600;
          color: #374151;
        }

        .detail-hero-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .detail-content {
          background: white;
          padding: 80px 60px;
        }

        .detail-content-inner {
          max-width: 1000px;
          margin: auto;
        }

        .detail-content h2 {
          color: #14532d;
          font-size: 36px;
        }

        .detail-content p {
          color: #4b5563;
          font-size: 17px;
          line-height: 1.8;
        }

        .detail-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 45px;
        }

        .highlight-card {
          background: #f5f7f2;
          padding: 28px;
          border-radius: 16px;
        }

        .highlight-card h3 {
          color: #14532d;
          font-size: 20px;
        }

        .highlight-card p {
          font-size: 15px;
        }

        .detail-back {
          background: #dcfce7;
          text-align: center;
          padding: 70px 20px;
        }

        .detail-back h2 {
          color: #14532d;
          font-size: 36px;
        }

        .back-button {
          display: inline-block;
          background: #14532d;
          color: white;
          padding: 14px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .back-button:hover {
          background: #166534;
        }

        .detail-footer {
          background: #14532d;
          color: white;
          text-align: center;
          padding: 50px 20px;
        }

        .detail-footer h2 {
          margin: 0 0 15px;
        }

        .detail-footer p {
          color: #dcfce7;
        }

        @media (max-width: 900px) {
          .detail-hero {
            grid-template-columns: 1fr;
          }

          .detail-highlights {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .detail-header {
            padding: 18px 20px;
          }

          .detail-nav {
            flex-direction: column;
            gap: 18px;
          }

          .detail-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .detail-hero {
            padding: 50px 20px;
          }

          .detail-hero h1 {
            font-size: 42px;
          }

          .detail-hero-image {
            height: 300px;
          }

          .detail-content {
            padding: 60px 20px;
          }
        }
      `}</style>


      {/* HEADER */}

      <header className="detail-header">

        <nav className="detail-nav">

          <a href="/" className="detail-logo">
            Pangasinan Heritage
          </a>

          <div className="detail-links">
            <a href="/">Home</a>
            <a href="/heritage">Heritage</a>
            <a href="/destinations">Destinations</a>
            <a href="/faces">Faces</a>
          </div>

        </nav>

      </header>


      {/* HERO */}

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            PEOPLE • COASTAL COMMUNITIES
          </p>

          <h1>
            The Fishermen
          </h1>

          <p className="detail-intro">
            Meet the fishermen of Pangasinan whose lives and
            livelihoods are closely connected to the province's
            rivers, bays, and coastline.
          </p>

          <p className="detail-location">
            📍 Coastal Communities of Pangasinan, Philippines
          </p>

        </div>


        <img
          src="/images/fishermen.jpg"
          alt="Fishermen in Pangasinan"
          className="detail-hero-image"
        />

      </section>


      {/* CONTENT */}

      <section className="detail-content">

        <div className="detail-content-inner">

          <h2>
            The Fishermen of Pangasinan
          </h2>

          <p>
            Fishing has long been connected to the daily life of
            many coastal communities in Pangasinan. Families living
            near the sea have depended on fishing as a source of
            food, livelihood, and community activity.
          </p>

          <p>
            Knowledge of the waters, weather, tides, fishing areas,
            and traditional fishing methods is often learned through
            experience and shared between generations. These skills
            form part of the living heritage of coastal Pangasinan.
          </p>

          <p>
            Fishermen also contribute to local markets by bringing
            fresh fish and other seafood to communities. Their work
            creates a connection between the sea, local families,
            markets, and everyday Filipino meals.
          </p>

          <div className="detail-highlights">

            <div className="highlight-card">

              <h3>
                🎣 Fishing Tradition
              </h3>

              <p>
                Traditional fishing knowledge continues to be shared
                within families and coastal communities.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🌊 Life by the Sea
              </h3>

              <p>
                Coastal life is shaped by the sea, weather,
                seasons, tides, and the rhythm of fishing.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🐟 Local Livelihood
              </h3>

              <p>
                Fishermen provide seafood that supports local
                households, markets, and communities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* BACK */}

      <section className="detail-back">

        <h2>
          Continue Exploring
        </h2>

        <a
          href="/faces"
          className="back-button"
        >
          Back to Faces
        </a>

      </section>


      {/* FOOTER */}

      <footer className="detail-footer">

        <h2>
          Pangasinan Heritage
        </h2>

        <p>
          Discover the places, people, stories, and traditions
          of Pangasinan.
        </p>

      </footer>

    </main>
  );
}