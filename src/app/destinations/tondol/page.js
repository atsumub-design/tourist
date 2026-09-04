import Link from "next/link";
export default function TondolBeach() {
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
        }

        .detail-hero-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,.12);
        }

        .detail-content {
          background: #fff;
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
          grid-template-columns: repeat(3,1fr);
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

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            ANDA, PANGASINAN
          </p>

          <h1>
            Tondol Beach
          </h1>

          <p className="detail-intro">
            Enjoy the wide sandy shoreline and shallow coastal
            waters of Tondol Beach, a popular destination for
            families and visitors in Pangasinan.
          </p>

          <p className="detail-location">
            📍 Anda, Pangasinan
          </p>

        </div>

        <img
          src="/tourist/images/cabongaoan.jpg"
          alt="Tondol Beach in Anda, Pangasinan"
          className="detail-hero-image"
        />

      </section>

      <section className="detail-content">

        <div className="detail-content-inner">

          <h2>
            About Tondol Beach
          </h2>

          <p>
            Tondol Beach is known for its broad shoreline and
            shallow waters, creating a relaxing coastal setting
            for visitors.
          </p>

          <p>
            Its family-friendly environment and accessible
            coastal scenery make it a popular destination for
            people looking to spend time by the sea.
          </p>

          <div className="detail-highlights">

            <div className="highlight-card">
              <h3>🏖️ Sandy Shore</h3>
              <p>
                Walk along the wide sandy shoreline and enjoy
                the coastal scenery.
              </p>
            </div>

            <div className="highlight-card">
              <h3>🌊 Shallow Waters</h3>
              <p>
                Experience the area's characteristic shallow
                coastal waters.
              </p>
            </div>

            <div className="highlight-card">
              <h3>👨‍👩‍👧‍👦 Family Destination</h3>
              <p>
                Enjoy a relaxing beach experience with family
                and friends.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="detail-back">

        <h2>
          Explore More Destinations
        </h2>

        <Link href="/destinations" className="back-button">
           Back to Destinations
        </Link>

      </section>

      <footer className="detail-footer">

        <h2>Pangasinan Heritage</h2>

        <p>
          Discover the places, people, stories, and traditions
          of Pangasinan.
        </p>

      </footer>

    </main>
  );
}