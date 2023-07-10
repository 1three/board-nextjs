"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DarkMode = () => {
  const router = useRouter();

  const DarkModeOn = () => {
    let modeValue = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];

    if (modeValue !== "" && modeValue === "light") {
      document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
      router.refresh();
    } else {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      router.refresh();
    }
  };

  useEffect(() => {
    DarkModeOn();
  }, []);

  return <span onClick={DarkModeOn}>🌙</span>;
};

export default DarkMode;
