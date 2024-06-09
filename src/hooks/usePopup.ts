"use client";
import { useState, useEffect } from "react";

type UsePopupReturnType = {
  collapsed: boolean;
  togglePopup: () => void;
  openPopup: () => void;
  closePopup: () => void;
};

export const usePopup = (collapsedWidth: number = 0): UsePopupReturnType => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const openPopup = () => {
    setCollapsed(false);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setCollapsed(true);
    document.body.style.overflow = "flex";
  };

  const togglePopup = () => {
    collapsed ? openPopup() : closePopup();
  };

  useEffect(() => {
    setCollapsed(window.innerWidth <= 1024);

    window.addEventListener("resize", () => {
      if (window.innerWidth <= collapsedWidth) {
        closePopup();
      }

      if (window.innerWidth > collapsedWidth) {
        openPopup();
        document.body.style.overflow = "auto";
      }
    });
  }, [collapsedWidth]);

  return {
    collapsed,
    togglePopup,
    openPopup,
    closePopup,
  };
};
