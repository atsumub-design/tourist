import Link from "next/link";
export default function LocalFood() {
  return (
    <main className="heritage-detail-page">

      <style>{`
        .heritage-detail-page {
          min-height: 100vh;
          background: #f5f7f2;
          color: #1f2933;
        }

        .heritage-detail-page * {
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
          font-size: 15px;
          font-weight: 500;
        }

        .detail-links a:hover {
          color: #15803d;
        }

        .detail-hero {
          max-width: 1280px;
          margin: auto;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .detail-label {
          color: #15803d;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin: 0 0 15px;
        }

        .detail-hero h1 {
          color: #14532d;
          font-size: 56px;
          line-height: 1.05;
          margin: 0 0 25px;
        }

        .detail-intro {
          color: #6b7280;
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .detail-location {
          margin-top: 25px;
          color: #374151;
          font-weight: 600;
        }

        .detail-hero-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .detail-content {
          background: #ffffff;
          padding: 90px 60px;
        }

        .detail-content-inner {
          max-width: 1000px;
          margin: auto;
        }

        .detail-content h2 {
          color: #14532d;
          font-size: 38px;
          line-height: 1.2;
          margin: 0 0 22px;
        }

        .detail-content h3 {
          color: #14532d;
          font-size: 24px;
          margin: 35px 0 12px;
        }

        .detail-content p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .food-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 45px;
        }

        .food-card {
          background: #f5f7f2;
          border-radius: 18px;
          overflow: hidden;
        }

        .food-card img {
          width: 100%;
          height: 220px;
          display: block;
          object-fit: cover;
        }

        .food-card-content {
          padding: 24px;
        }

        .food-card-content h3 {
          margin: 0 0 10px;
          font-size: 21px;
        }

        .food-card-content p {
          font-size: 15px;
          margin: 0;
        }

        .detail-back {
          background: #dcfce7;
          padding: 75px 20px;
          text-align: center;
        }

        .detail-back h2 {
          color: #14532d;
          font-size: 36px;
          margin: 0 0 25px;
        }

        .back-button {
          display: inline-block;
          background: #14532d;
          color: #ffffff;
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
          color: #ffffff;
          text-align: center;
          padding: 55px 20px;
        }

        .detail-footer h2 {
          margin: 0 0 15px;
          color: #ffffff;
        }

        .detail-footer p {
          color: #dcfce7;
          margin: 0;
        }

        @media (max-width: 900px) {
          .detail-hero {
            grid-template-columns: 1fr;
          }

          .food-images {
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

          .detail-logo {
            font-size: 21px;
          }

          .detail-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .detail-links a {
            font-size: 14px;
          }

          .detail-hero {
            padding: 55px 20px 65px;
          }

          .detail-hero h1 {
            font-size: 40px;
          }

          .detail-intro {
            font-size: 16px;
          }

          .detail-hero-image {
            height: 300px;
            border-radius: 18px;
          }

          .detail-content {
            padding: 65px 20px;
          }

          .detail-content h2 {
            font-size: 32px;
          }

          .detail-content p {
            font-size: 16px;
          }

          .food-card img {
            height: 240px;
          }

          .detail-back h2 {
            font-size: 32px;
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
            CULTURE • FOOD • TRADITION
          </p>

          <h1>
            Pangasinan Food
          </h1>

          <p className="detail-intro">
            Discover the traditional foods and local products
            that have become part of Pangasinan's cultural
            identity and everyday life.
          </p>

          <p className="detail-location">
            📍 Pangasinan, Philippines
          </p>

        </div>

        <img
          src="/tourist/images/puto.jpg"
          alt="Traditional Puto Calasiao"
          className="detail-hero-image"
        />

      </section>

      <section className="detail-content">

        <div className="detail-content-inner">

          <p className="detail-label">
            A TASTE OF HISTORY
          </p>

          <h2>
            The Food Heritage of Pangasinan
          </h2>

          <p>
            Food in Pangasinan reflects the province's
            agricultural lands, coastal communities, local
            industries, and long-standing family traditions.
            Traditional foods are often prepared using locally
            available ingredients and methods passed down through
            generations.
          </p>

          <p>
            Among the province's best-known food traditions is
            Puto Calasiao, a small steamed rice cake associated
            with the town of Calasiao. Its preparation and
            distinctive texture have made it a recognizable
            delicacy of Pangasinan.
          </p>

          <p>
            Pangasinan is also strongly associated with bangus,
            or milkfish. The province's fishponds and coastal
            environment have supported bangus production for
            generations, making the fish an important part of
            both local livelihood and cuisine.
          </p>

          <p>
            Another important local product is salt. Salt-making
            has historically been connected with Pangasinan's
            coastal communities, where seawater and traditional
            evaporation methods were used to produce salt.
          </p>

          <h3>
            Food as Cultural Heritage
          </h3>

          <p>
            Traditional food is not simply something people eat.
            Recipes, preparation techniques, ingredients, and
            food-making practices can preserve memories and
            connect families with the history of their community.
          </p>

          <div className="food-images">

            <div className="food-card">

              <img
                src="/tourist/images/puto.jpg"
                alt="Puto Calasiao"
              />

              <div className="food-card-content">

                <h3>
                  Puto Calasiao
                </h3>

                <p>
                  A well-known rice cake tradition associated
                  with Calasiao and an important part of
                  Pangasinan's local food culture.
                </p>

              </div>

            </div>

            <div className="food-card">

              <img
                src="/tourist/images/bangus.jpg"
                alt="Bangus of Pangasinan"
              />

              <div className="food-card-content">

                <h3>
                  Pangasinan Bangus
                </h3>

                <p>
                  Milkfish is closely connected with the
                  province's fishponds, coastal communities,
                  livelihoods, and cuisine.
                </p>

              </div>

            </div>

            <div className="food-card">

              <img
                src="/tourist/images/asin.jpg"
                alt="Salt production in Pangasinan"
              />

              <div className="food-card-content">

                <h3>
                  Pangasinan Asin
                </h3>

                <p>
                  Salt-making represents an important coastal
                  livelihood and traditional local industry.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="detail-back">

        <h2>
          Continue Exploring Pangasinan Heritage
        </h2>

        <Link
          href="/heritage"
          className="back-button"
        >
          Back to Heritage
        </Link>

      </section>

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