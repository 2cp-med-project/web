type LogoProps = {
  size?: number;
  color?: "foreground" | "white";
};

export function Logo({ size = 50, color = "foreground" }: LogoProps) {
  if (color === "foreground")
    return (
      <img
        src="/svg/logo-foreground.svg"
        width={size}
        height={size}
        className="object-center object-cover"
      />
    );

  if (color === "white")
    return (
      <img
        src="/svg/logo-white.svg"
        width={size}
        height={size}
        className="object-center object-cover"
      />
    );

  return null;
}
