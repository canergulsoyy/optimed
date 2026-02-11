"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white pt-16 pb-10 text-text-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Quick access */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-800">
              {t("quickAccessTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("contractedInstitutions")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("pdplNotice")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("patientRights")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("patientGuide")}
                </a>
              </li>
            </ul>

            <div className="mt-5 space-y-2 text-sm">
              <p className="font-semibold uppercase tracking-wide text-primary-800">
                {t("media")}
              </p>
              <a href="#" className="text-text-secondary hover:text-primary-800">
                {t("healthCorner")}
              </a>
            </div>
          </div>

          {/* Medical units */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-800">
              {t("medicalUnitsTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-primary-800">
                  {t("contactLink")}
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold hover:text-primary-800">
                  {t("seeAll")}
                </a>
              </li>
            </ul>
          </div>

          {/* Hospitals & social */}
          <div className="space-y-6 text-sm text-text-secondary">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-800">
                {t("hospitalsTitle")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hospitals" className="hover:text-primary-800">
                    Optimed | Çerkezköy
                  </a>
                </li>
                <li>
                  <a href="#hospitals" className="hover:text-primary-800">
                    Optimed | Çorlu
                  </a>
                </li>
                <li>
                  <a href="#hospitals" className="hover:text-primary-800">
                    Optimed | Kapaklı
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-800">
                {t("socialMediaTitle")}
              </h3>
              <div className="flex items-center gap-3 text-slate-400">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="hover:text-primary-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M13.5 9H15V6.75A8.973 8.973 0 0012.75 6C10.678 6 9 7.507 9 9.75V12H6.75v3H9v6h3v-6h2.25L15 12h-3v-2.25C12 9.336 12.336 9 13.5 9z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="#" aria-label="X" className="hover:text-primary-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M3.5 4.75h3.02L10 9.4 13.46 4.75h4.03l-5.5 7.1 5.5 7.4h-3.02L14 14.6 10.34 19.25H6.3l5.5-7.23-5.5-7.27z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="hover:text-primary-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M7 3C4.791 3 3 4.791 3 7v10c0 2.209 1.791 4 4 4h10c2.209 0 4-1.791 4-4V7c0-2.209-1.791-4-4-4H7zm0 2h10c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2H7c-1.103 0-2-.897-2-2V7c0-1.103.897-2 2-2zm10 1.5a1 1 0 100 2 1 1 0 000-2zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="hover:text-primary-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M21.8 8.001a2.749 2.749 0 00-1.935-1.948C18.273 5.75 12 5.75 12 5.75s-6.273 0-7.865.303A2.749 2.749 0 002.2 8.001 28.37 28.37 0 002 12a28.37 28.37 0 00.2 3.999 2.749 2.749 0 001.935 1.948C5.727 18.25 12 18.25 12 18.25s6.273 0 7.865-.303a2.749 2.749 0 001.935-1.948A28.37 28.37 0 0022 12a28.37 28.37 0 00-.2-3.999zM10.5 14.75v-5.5L15 12l-4.5 2.75z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" aria-label="LinkedIn" className="hover:text-primary-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48 3 6.57 3.87 7.46 4.96 7.48h.02C6.06 7.48 6.94 6.6 6.94 5.5 6.92 4.41 6.05 3.52 4.98 3.5zM4 8.75h2v11H4v-11zM9 8.75h1.92v1.5h.03c.27-.51.94-1.05 1.93-1.05 2.07 0 2.45 1.36 2.45 3.13v6.47h-2v-5.73c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.83H9v-11z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-5 text-center text-xs text-slate-500">
          &copy; {year} Optimed Health Group. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

