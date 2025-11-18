"use client";

import { Category, Collection } from "@/lib/generated/prisma/client";
import { useEffect, useState } from "react";
export const Footer = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
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
    const getCollections = async () => {
      try {
        const res = await fetch("/api/collections");
        if (!res.ok) throw new Error("Error getting collections");
        const data = await res.json();
        setCollections(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
    getCollections();
  }, []);
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row max-h-fit">
            {categories.length > 0 && (
              <div className="col-sm-6 col-lg-3 p-b-50 max-h-fit">
                <h4 className="stext-301 cl0 p-b-10">Categorias</h4>
                <ul>
                  {categories.map((category) => (
                    <li key={category.id} className="p-b-10">
                      <a
                        href={`/categorias/${category.slug}`}
                        className="stext-107 cl7 hov-cl1 trans-04"
                      >
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {collections.length > 0 && (
              <div className="col-sm-6 col-lg-3 p-b-50 max-h-fit">
                <h4 className="stext-301 cl0 p-b-10">Colecoes</h4>
                <ul>
                  {collections.map((collection) => (
                    <li key={collection.id} className="p-b-10">
                      <a
                        href={`/colecoes/${collection.slug}`}
                        className="stext-107 cl7 hov-cl1 trans-04"
                      >
                        {collection.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="col-sm-6 col-lg-3 p-b-50  max-h-fit">
              <h4 className="stext-301 cl0 p-b-10">Help</h4>
              <ul>
                <li className="p-b-10">
                  <a
                    href="/contacto"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Devoluçao
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="/termos" className="stext-107 cl7 hov-cl1 trans-04">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50  ">
              <h4 className="stext-301 cl0 p-b-10">Contacte-nos</h4>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B258845398661&context=AffveXQCHGj3O5MJbVSuNam1GwahGj95PSOy3tKLvG7ON8EuGRkpTOXjgBMF8JPmGNGcn1isUnVBH0rxFgbUg1AJp2cT0hBuqYH67rUAPAFbD_NTjpwYBnxTLJuOKgGLkRybf6wEkoXDtFx53CUnhY3m_A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawOHtENleHRuA2FlbQIxMABicmlkETF5T1NnaFV4ek1oTThKT3Zwc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MghjYWxsc2l0ZQEyAAEenn2FQhTpBJ1o6ghHo12RKgqB94TmHSIh0wOmYyf-x5XLgR2oVhAhizJG36E_aem_HFUB72noPgPyfKSHj0rohA"
                  target="_blank"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-whatsapp" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085448553558"
                  target="_blank"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/vesteousadia/"
                  target="_blank"
                  className="fs-18 cl7 hov-cl1 trans-04 m-r-16"
                >
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-t-40">
            <p className="stext-107 cl6 txt-center">
              Copyright © All rights reserved | Made by{" "}
              <a
                href="https://portfolio-arcidesferraos-projects.vercel.app/"
                target="_blank"
              >
                Arcides Ferrao
              </a>{" "}
              &amp; distributed theme by{" "}
              <a href="https://themewagon.com" target="_blank">
                ThemeWagon
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </footer>
      {/* Back to top */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
    </>
  );
};
