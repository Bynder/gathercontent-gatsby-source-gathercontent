import * as React from "react"

function HeroImage({ url }) {
  return (
    <div className="bg-neutral-2">
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="bg-cover bg-center h-60"
      />
    </div>
  );
}

export { HeroImage };
