import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center p-6 py-12 gap-8">

      <div className="flex justify-center pt-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          priority
          className="w-10 h-auto"
        />
      </div>

      <div className="w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}