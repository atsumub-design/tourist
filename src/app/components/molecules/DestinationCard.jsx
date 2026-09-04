export default function DestinationCard({
  image,
  alt,
  location,
  title,
  description,
  id,
}) {
  return (
    <article
      className="card"
      id={id}
    >
      <div className="card-image">
        <img
          src={image}
          alt={alt}
        />
      </div>

      <div className="card-content">
        {location && (
          <p className="card-location">
            {location}
          </p>
        )}

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </article>
  );
}