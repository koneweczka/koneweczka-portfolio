export function CornerDecorations() {
  const baseClass = "corner-img";

  return (
    <>
      <img
        src="/images/corner-top-left.png"
        alt="Dekoracja górny lewy róg"
        className={`${baseClass} hidden  md:block dark:hidden top-4 left-4`}
      />
      <img
        src="/images/dark-top-left.png"
        alt="Dekoracja górny lewy róg"
        className={`${baseClass} hidden md:dark:block top-4 left-4`}
      />
      <img
        src="/images/corner-top-right.png"
        alt="Dekoracja górny prawy róg"
        className={`${baseClass} hidden md:block dark:hidden top-4 right-4`}
      />
      <img
        src="/images/dark-top-right.png"
        alt="Dekoracja górny prawy róg"
        className={`${baseClass} hidden md:dark:block top-4 right-4`}
      />
      <img
        src="/images/corner-bottom-left.png"
        alt="Dekoracja dolny lewy róg"
        className={`${baseClass} hidden md:block dark:hidden bottom-4 left-4`}
      />
      <img
        src="/images/dark-bottom-left.png"
        alt="Dekoracja dolny lewy róg"
        className={`${baseClass} hidden md:dark:block bottom-4 left-4`}
      />
      <img
        src="/images/corner-bottom-right.png"
        alt="Dekoracja dolny prawy róg"
        className={`${baseClass} hidden md:block dark:hidden bottom-4 right-4`}
      />
      <img
        src="/images/dark-bottom-right.png"
        alt="Dekoracja dolny prawy róg"
        className={`${baseClass} hidden md:dark:block bottom-4 right-4`}
      />
    </>
  );
}
