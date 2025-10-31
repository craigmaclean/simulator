const base =
    "inline-flex items-center justify-center font-semibold uppercase rounded-md transition-all cursor-pointer mb-4 shadow-md hover:opacity-[0.90] hover:shadow-xl focus:outline-none transition-all";

const variants = {
    primary: "bg-navy text-white",
    secondary: "bg-white text-navy border border-navy",
    accent: "bg-gold text-navy",
};

const sizes = {
    default: "px-8 py-3 text-base",
    large: "px-8 py-4 text-xl sm:text-2xl",
};

export default function CtaButton({
    variant = "primary",
    size = "default",
    children,
    className = "",
    ...props
}) {
    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
