import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Image width={96} height={96} src="spinner.svg" alt="Loading..." />
    </div>
  );
}
