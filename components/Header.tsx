"use client";

import { Category } from "@/lib/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  const [promo, setPromo] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSubMenu, setIsSubMenu] = useState<string | null>(null);

  let headerClass = "";

  if (pathname !== "/") {
    headerClass = "header-v4";
  }

  const handleMenuToggle = () => {
    setIsMenu((prev) => !prev);
    if (isMenu) {
      setIsSubMenu(null);
    }
  };

  const handleSubMenu = (index: string | null) => {
    setIsSubMenu(isSubMenu === index ? null : index);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Error getting categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    const getPromo = async () => {
      try {
        const res = await fetch("/api/promo");
        if (!res.ok) throw new Error("Error getting promo");
        const data = await res.json();
        setPromo(data[0].text);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
    getPromo();
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMenu) {
        setIsMenu(false);
        setIsSubMenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenu]);

  return (
    <header className={headerClass}>
      {/* Header desktop */}
      <div className="container-menu-desktop">
        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">{promo}</div>
            <div className="right-top-bar flex-w h-full">
              <a href="/termos" className="flex-c-m trans-04 p-lr-25">
                Termos &amp; Condiçoes
              </a>
              {/* <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a> */}
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <Link href="/" className="logo">
              <Image
                // src="/images/icons/logo-01.png"
                src="/images/icons/logomarca.png"
                alt="IMG-LOGO"
                width={120}
                height={100}
              />
            </Link>
            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/produtos">Loja</Link>
                </li>
                <li>
                  <a href="/categorias">Categorias</a>
                  <ul className="sub-menu">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <a href={`/categorias/${category.slug}`}>
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="/sobre">Sobre Ousadia</a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search" />
              </div>
              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                data-notify={2}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={0}
              >
                <i className="zmdi zmdi-favorite-outline" />
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <Link href="/">
            <Image
              // src="/images/icons/logo-01.png"
              src="/images/icons/logomarca.png"
              alt="IMG-LOGO"
              width={120}
              height={120}
            />
          </Link>
        </div>
        {/* Icon header */}
        {/* <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search" />
          </div>
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify={2}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          <a
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify={0}
          >
            <i className="zmdi zmdi-favorite-outline" />
          </a>
        </div> */}
        {/* Button show menu */}
        <div
          onClick={handleMenuToggle}
          className={`btn-show-menu-mobile hamburger hamburger--squeeze ${
            isMenu ? "is-active" : ""
          }`}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
      </div>
      {/* Menu Mobile */}
      <div
        style={{ display: isMenu ? "block" : "none" }}
        className={`menu-mobile ${isMenu ? "menu-open" : ""}`}
      >
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">{promo}</div>
          </li>
          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="/termos" className="flex-c-m p-lr-10 trans-04">
                Termos &amp; Condiçoes
              </a>
              {/* <a href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                USD
              </a> */}
            </div>
          </li>
        </ul>
        <ul className="main-menu-m">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/produtos">Loja</Link>
          </li>
          {/* <li>
            <a
            href="shoping-cart.html"
            className="label1 rs1"
            data-label1="hot"
            >
            Features
            </a>
            </li>
            */}
          <li>
            <a href="/categorias">Categorias</a>
            <ul
              className="sub-menu-m"
              style={{ display: isSubMenu === "categorias" ? "block" : "none" }}
            >
              {categories.map((category) => (
                <li key={category.id}>
                  <a href={`/categorias/${category.slug}`}>{category.name}</a>
                </li>
              ))}
            </ul>
            <span
              className={`arrow-main-menu-m ${
                isSubMenu === "categorias" ? "turn-arrow-main-menu-m" : ""
              } `}
              onClick={() => handleSubMenu("categorias")}
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </li>
          <li>
            <a href="/sobre">Sobre Ousadia</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </div>
      {/* Modal Search */}
      {/*       
      <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div className="container-search-header">
          <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
            <Image
              src="/images/icons/icon-close2.png"
              alt="CLOSE"
              width={32}
              height={32}
            />
          </button>
          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search" />
            </button>
            <input
              className="plh3"
              type="text"
              name="search"
              placeholder="Search..."
              // width={24}
              // height={24}
            />
          </form>
        </div> 
      </div>
        */}
    </header>
  );
};
