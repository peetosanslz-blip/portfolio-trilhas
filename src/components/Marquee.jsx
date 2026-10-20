const ITEMS = ["front-end", "react", "javascript", "html", "css", "lógica de programação"];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true" data-testid="marquee">
      <div className="marquee__track">
        {[0, 1].map((g) => (
          <div className="marquee__group" key={g}>
            {ITEMS.map((it, i) => (
              <span className="flex items-center gap-11" key={i}>
                <span className={`mi ${i % 2 ? "mi--o" : ""}`}>{it}</span>
                <i className="dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
