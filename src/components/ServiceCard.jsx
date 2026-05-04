import { Link } from "react-router-dom";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 text-[#6B7D3A] flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ServiceCard({ image, title, description, benefits, ctaLabel, ctaPrimary, ctaHref, ctaInternal }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-serif text-[#1E1E1E]">{title}</h3>
        <p className="text-[#6B6B6B] text-sm leading-relaxed">{description}</p>

        <ul className="flex flex-col gap-2 mt-1">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-[#1E1E1E]">
              <CheckIcon />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          {ctaInternal ? (
            <Link
              to={ctaHref}
              className={`block text-center w-full ${ctaPrimary ? "btn-primary" : "btn-outline"}`}
            >
              {ctaLabel}
            </Link>
          ) : (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center w-full ${ctaPrimary ? "btn-primary" : "btn-outline"}`}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
