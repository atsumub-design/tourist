import Link from "next/link";
export default function Farmers() {
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


      {/* =========================================================
          HEADER
      ========================================================= */}

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


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            PEOPLE • AGRICULTURE • TRADITION
          </p>

          <h1>
            The Farmers
          </h1>

          <p className="detail-intro">
            Meet the farmers of Pangasinan, whose connection to
            the land has helped shape the province's communities,
            food traditions, and agricultural way of life for
            generations.
          </p>

          <p className="detail-location">
            📍 Pangasinan, Philippines
          </p>

        </div>


        <img
          src="/tourist/images/farmers.jpg"
          alt="Farmers in Pangasinan"
          className="detail-hero-image"
        />

      </section>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <section className="detail-content">

        <div className="detail-content-inner">

          <h2>
            Farmers and the Agricultural Heritage of Pangasinan
          </h2>

          <p>
            Pangasinan has long been known for its agricultural
            communities and productive farmlands. Across towns
            and rural communities, farmers work with the land
            through planting, cultivating, harvesting, and
            preparing crops that become part of everyday life.
          </p>

          <p>
            One of the most important crops associated with
            Pangasinan is rice. The province's wide agricultural
            areas have supported rice farming for generations,
            making farmers an important part of the food system
            that connects rural communities with families and
            markets throughout the province.
          </p>

          <p>
            Farming is more than a livelihood. It is also a
            tradition of knowledge. Farmers learn to understand
            the seasons, prepare the soil, care for crops, and
            recognize the changing conditions of the land.
            Much of this knowledge is shared within families and
            passed from older generations to younger ones.
          </p>

          <p>
            The story of Pangasinan's farmers is therefore a story
            of patience, hard work, and connection to the land.
            Their everyday efforts help preserve an important part
            of Pangasinan's heritage while continuing to provide
            food and livelihood for local communities.
          </p>


          {/* =====================================================
              HIGHLIGHTS
          ===================================================== */}

          <div className="detail-highlights">

            <div className="highlight-card">

              <h3>
                🌾 Rice Farming
              </h3>

              <p>
                Rice farming has an important place in the
                agricultural life of Pangasinan, supporting
                farmers, families, and local communities.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                👨‍🌾 Generational Knowledge
              </h3>

              <p>
                Farming knowledge is often learned through
                experience and shared between parents, elders,
                and younger generations.
              </p>

            </div>


            <div className="highlight-card">

              <h3>
                🌱 Life on the Land
              </h3>

              <p>
                Farmers maintain a close relationship with the
                land, seasons, crops, and natural conditions that
                shape agricultural life.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BACK TO FACES
      ========================================================= */}

      <section className="detail-back">

        <h2>
          Continue Exploring the Faces of Pangasinan
        </h2>

        <Link
          href="/faces"
          className="back-button"
        >
          Back to Faces
        </Link>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

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