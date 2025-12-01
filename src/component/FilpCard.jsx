import { useState } from "react";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`
          w-[200px] h-[200px]
          relative
          [transform-style:preserve-3d]
          transition-transform duration-500
          ${
            flipped
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          }
        `}
      >
        <img
          src={front}
          alt="front"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            [backface-visibility:hidden]
          "
        />

        <img
          src={back}
          alt="back"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        />
      </div>

      <button
        type="button"
        onClick={() => setFlipped((prev) => !prev)}
        className="mt-2 rounded border px-3 py-1 text-sm hover:bg-gray-100"
      >
        뒤집기
      </button>
    </div>
  );
}
