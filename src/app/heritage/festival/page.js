import Link from "next/link";
export default function Festival() {
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

        .festival-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 20px;
          margin-top: 35px;
        }

        .festival-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 50px;
        }

        .highlight-card {
          background: #f5f7f2;
          padding: 28px;
          border-radius: 16px;
        }

        .highlight-card h3 {
          color: #14532d;
          font-size: 20px;
          margin: 0 0 12px;
        }

        .highlight-card p {
          font-size: 15px;
          margin: 0;
        }

        /* =========================
           PITAY DAYAT
        ========================= */

        .pitay-dayat {
          background: #f5f7f2;
          padding: 90px 60px;
        }

        .pitay-dayat-inner {
          max-width: 1000px;
          margin: auto;
        }

        .pitay-dayat h2 {
          color: #14532d;
          font-size: 38px;
          line-height: 1.2;
          margin: 0 0 22px;
        }

        .pitay-dayat p {
          color: #6b7280;
          font-size: 17px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .pitay-dayat-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 20px;
          margin-top: 35px;
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

          .festival-highlights {
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

          .festival-image {
            height: 300px;
            border-radius: 18px;
          }

          .pitay-dayat {
            padding: 65px 20px;
          }

          .pitay-dayat h2 {
            font-size: 32px;
          }

          .pitay-dayat p {
            font-size: 16px;
          }

          .pitay-dayat-image {
            height: 300px;
            border-radius: 18px;
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

      {/* =========================
          BANGUS FESTIVAL
      ========================= */}

      <section className="detail-hero">

        <div>

          <p className="detail-label">
            FESTIVAL • CULTURE • COMMUNITY
          </p>

          <h1>
            Bangus Festival
          </h1>

          <p className="detail-intro">
            Discover the story of Dagupan City's famous
            Bangus Festival, a celebration that highlights
            the city's connection with bangus, local livelihood,
            food, and community pride.
          </p>

          <p className="detail-location">
            📍 Dagupan City, Pangasinan
          </p>

        </div>

        <img
          src="/tourist/images/bangusfestival.jpg"
          alt="Bangus Festival in Pangasinan"
          className="detail-hero-image"
        />

      </section>

      <section className="detail-content">

        <div className="detail-content-inner">

          <p className="detail-label">
            CELEBRATING THE MILKFISH
          </p>

          <h2>
            The Story of the Bangus Festival
          </h2>

          <p>
            The Bangus Festival is one of the best-known
            celebrations associated with Dagupan City.
            The festival highlights bangus, or milkfish, which
            has become strongly connected with the city's
            identity and local economy.
          </p>

          <p>
            The celebration brings together residents,
            businesses, performers, food makers, farmers,
            fishpond workers, and visitors. Through different
            activities and public events, the festival showcases
            the importance of bangus to the community.
          </p>

          <p>
            One of the most recognizable traditions associated
            with the celebration is the preparation and cooking
            of bangus in large quantities. These activities
            transform a local food product into a symbol of
            community pride and celebration.
          </p>

          <img
            src="/tourist/images/bangusfestival.jpg"
            alt="Bangus Festival celebration"
            className="festival-image"
          />

          <h3>
            More Than a Food Festival
          </h3>

          <p>
            The Bangus Festival is also a celebration of
            community identity. It provides an opportunity for
            local people to showcase their creativity, talents,
            food, traditions, and pride in their city.
          </p>

          <p>
            The festival also reminds visitors of the
            importance of the people behind Pangasinan's
            agricultural and aquaculture industries. The
            celebration connects food with livelihood,
            culture, and local history.
          </p>

          <div className="festival-highlights">

            <div className="highlight-card">

              <h3>
                🐟 Bangus
              </h3>

              <p>
                Milkfish is at the heart of the celebration
                and represents an important part of Dagupan's
                identity.
              </p>

            </div>

            <div className="highlight-card">

              <h3>
                🎉 Community
              </h3>

              <p>
                The festival brings residents and visitors
                together through celebrations and activities.
              </p>

            </div>

            <div className="highlight-card">

              <h3>
                🍽️ Local Food
              </h3>

              <p>
                Bangus dishes and local food traditions allow
                visitors to experience an important part of
                Pangasinan's culinary heritage.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PITAY DAYAT
      ========================= */}

      <section className="pitay-dayat">

        <div className="pitay-dayat-inner">

          <p className="detail-label">
            CULTURE • TRADITION • CELEBRATION
          </p>

          <h2>
            Pistay Dayat
          </h2>

          <p>
            Pistay Dayat is a major cultural celebration in
            Pangasinan that highlights the province's connection
            with the sea, fishing communities, agriculture,
            local traditions, and the people of Pangasinan.
          </p>

          <p>
            The celebration brings communities together through
            cultural activities, performances, local food,
            entertainment, and gatherings that showcase the
            province's rich cultural identity.
          </p>

          <p>
            The name Pistay Dayat means "Feast of the Sea,"
            reflecting the importance of the sea and coastal
            resources to the people and communities of Pangasinan.
          </p>

          <img
            src="/tourist/images/festival.jpg"
            alt="Pistay Dayat celebration in Pangasinan"
            className="pitay-dayat-image"
          />

          <h3>
            Celebrating the Sea and Community
          </h3>

          <p>
            Pistay Dayat provides an opportunity for people to
            celebrate Pangasinan's coastal heritage while
            strengthening community connections. The celebration
            also gives visitors a chance to experience local
            traditions, food, music, and cultural activities.
          </p>

        </div>

      </section>

      {/* =========================
          BACK
      ========================= */}

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

      {/* =========================
          FOOTER
      ========================= */}

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