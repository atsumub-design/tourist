import Link from "next/link";
export default function HundredIslandsPage() {
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
          background: #fff;
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
          align-items: center;
          justify-content: space-between;
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
          font-size: 55px;
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
        }

        .detail-hero-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,.12);
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

        .detail-footer {
          background: #14532d;
          color: white;
          text-align: center;
          padding: 50px 20px;
        }

        .detail-footer p {
          color: #dcfce7;
        }

        @media(max-width:900px) {
          .detail-hero {
            grid-template-columns: 1fr;
          }

          .detail-highlights {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width:600px) {
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
            font-size: 40px;
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

          <Link href="/" className="detail-logo">
            Pangasinan Heritage
          </Link>

          <div className="detail-links">
            <Link href="/">Home</Link>
            <Link href="/heritage">Heritage</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/faces">Faces</Link>
          </div>

        </nav>
      </header>


      {/* HERO */}

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            ALAMINOS CITY, PANGASINAN
          </p>

          <h1>
            Hundred Islands
          </h1>

          <p className="detail-intro">
            Discover one of Pangasinan's most iconic natural
            attractions, where limestone islands rise from
            the clear waters of Lingayen Gulf.
          </p>

          <p className="detail-location">
            📍 Alaminos City, Pangasinan
          </p>

        </div>


        <img
          src="/tourist/images/hundred-island.jpg"
          alt="Hundred Islands National Park in Alaminos, Pangasinan"
          className="detail-hero-image"
        />

      </section>


      {/* CONTENT */}

      <section className="detail-content">

        <div className="detail-content-inner">

          <h2>
            A Natural Treasure of Pangasinan
          </h2>

          <p>
            Hundred Islands National Park is one of the most
            recognizable destinations in Pangasinan. Its
            collection of limestone islands, surrounded by
            clear coastal waters, creates a landscape that
            attracts visitors looking for adventure, relaxation,
            and memorable experiences.
          </p>

          <p>
            The destination also reflects the natural beauty
            that has become an important part of Pangasinan's
            identity.
          </p>


          <div className="detail-highlights">

            <div className="highlight-card">

              <h3>
                🏝️ Island Exploration
              </h3>

              <p>
                Explore the distinctive limestone islands and
                enjoy the changing views of the surrounding
                coastal landscape.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🌊 Coastal Adventure
              </h3>

              <p>
                Experience the waters surrounding the islands
                through sightseeing, boating, swimming, and
                other outdoor activities.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🌅 Natural Scenery
              </h3>

              <p>
                Take in panoramic coastal views and appreciate
                the unique geological formations that define
                the Hundred Islands landscape.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EXPLORE MORE */}

      <section className="detail-back">

        <h2>
          Explore More Destinations
        </h2>

        <Link
          href="/destinations"
          className="back-button"
        >
          Explore More Destinations
        </Link>

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