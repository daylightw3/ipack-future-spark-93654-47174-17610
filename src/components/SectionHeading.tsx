interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  eyebrowIcon?: React.ReactNode;
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  eyebrowIcon,
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-14 animate-fade-in ${
        isCenter ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2.5 mb-5 ${
            isCenter ? "" : ""
          }`}
        >
          <span className="h-px w-8 bg-primary/50" />
          {eyebrowIcon}
          <span className="text-primary font-semibold text-xs md:text-sm tracking-[0.2em] uppercase">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-primary/50" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 text-foreground tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
