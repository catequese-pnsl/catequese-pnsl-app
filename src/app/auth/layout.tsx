import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh place-items-center p-6">
      <div className="col-start-1 row-start-1 w-full max-w-sm">
        {children}
      </div>

      <div className="col-start-1 row-start-1 self-start justify-self-center pt-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          priority
        />
      </div>
    </div>
  );
}