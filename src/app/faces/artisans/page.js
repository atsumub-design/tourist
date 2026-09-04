import Link from "next/link";
export default function Artisans() {
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
            PEOPLE • TRADITIONAL CRAFTS
          </p>

          <h1>
            Local Artisans
          </h1>

          <p className="detail-intro">
            Discover the artisans of Pangasinan who preserve
            traditional craftsmanship through handmade objects,
            creative skills, and knowledge passed between generations.
          </p>

          <p className="detail-location">
            📍 Pangasinan, Philippines
          </p>

        </div>


        <img
          src="/tourist/images/local-artisan.jpg"
          alt="Local artisan in Pangasinan"
          className="detail-hero-image"
        />

      </section>


      {/* CONTENT */}

      <section className="detail-content">

        <div className="detail-content-inner">

          <h2>
            The Artisans of Pangasinan
          </h2>

          <p>
            Traditional craftsmanship is an important part of
            cultural heritage because it carries knowledge about
            materials, tools, techniques, and creative practices.
            In Pangasinan, local artisans continue to create
            handmade products connected to community life.
          </p>

          <p>
            Artisan skills are often learned through observation,
            practice, and guidance from experienced family members
            or fellow craftspeople. The process allows practical
            knowledge to be passed from one generation to the next.
          </p>

          <p>
            Handmade crafts can also reflect the environment and
            resources available in a community. The materials,
            designs, and methods used by artisans can therefore
            become part of the visual identity of a place.
          </p>

          <p>
            Supporting local artisans helps create opportunities
            for traditional skills to remain relevant while giving
            visitors a chance to appreciate the creativity and
            cultural knowledge behind handmade work.
          </p>

          <div className="detail-highlights">

            <div className="highlight-card">

              <h3>
                🧺 Handmade Crafts
              </h3>

              <p>
                Artisans create products by using practical skills,
                creativity, and traditional techniques.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                👐 Skilled Hands
              </h3>

              <p>
                Craftsmanship develops through practice,
                patience, experience, and guidance.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🌿 Local Materials
              </h3>

              <p>
                Traditional crafts can reflect the natural
                materials and environment of local communities.
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

        <Link
          href="/faces"
          className="back-button"
        >
          Back to Faces
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