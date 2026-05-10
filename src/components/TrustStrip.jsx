export default function TrustStrip({ items }) {
  return (
    <section className="trust-strip">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}
