type LogoProps = {
  w?: number;
  h?: number;
};

export function Logo({ w = 50, h = 50 }: LogoProps) {
  return (
    <img
      src="/svg/logo.svg"
      width={w}
      height={h}
      className="object-center object-cover"
    />
  );
}
