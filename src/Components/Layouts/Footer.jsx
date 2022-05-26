import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-padding mt-8">
        <div className="max-w">
          <div className="sm:flex justify-between items-center">
            <picture
            ><img
                src="Images/logo.png"
                className="md:h-[187px] h-[100px] w-[100px] md:w-[187px]"
                alt=""
              /></picture>
            <div className="space-y-10 md:mt-0 mt-3">
              <a aria-label="arrow-back" href="">
                <div
                  className="flex items-center gap-3 dark:text-white hover:scale-105 hover-animation"
                >
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 7 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25961 0.25961C0.605756 -0.0865366 1.16697 -0.0865366 1.51312 0.25961L6.24039 4.98688C6.58654 5.33303 6.58654 5.89424 6.24039 6.24039L1.51312 10.9677C1.16697 11.3138 0.605756 11.3138 0.25961 10.9677C-0.0865366 10.6215 -0.0865366 10.0603 0.25961 9.71416L4.36013 5.61364L0.25961 1.51312C-0.0865366 1.16697 -0.0865366 0.605756 0.25961 0.25961Z"
                    />
                  </svg>
                  <p className="font-bold text-[18px]">Esonero di responsabilità</p>
                </div>
              </a>
              <a aria-label="" href="">
                <div
                  className="flex items-center dark:text-white gap-3 mt-3 hover:scale-105 hover-animation"
                >
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 7 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25961 0.25961C0.605756 -0.0865366 1.16697 -0.0865366 1.51312 0.25961L6.24039 4.98688C6.58654 5.33303 6.58654 5.89424 6.24039 6.24039L1.51312 10.9677C1.16697 11.3138 0.605756 11.3138 0.25961 10.9677C-0.0865366 10.6215 -0.0865366 10.0603 0.25961 9.71416L4.36013 5.61364L0.25961 1.51312C-0.0865366 1.16697 -0.0865366 0.605756 0.25961 0.25961Z"
                    />
                  </svg>

                  <p className="font-bold dark:text-white text-[18px]">
                    Contratto di Fornitura di Servizi
                  </p>
                </div>
              </a>
              <a aria-label="" href="">
                <div
                  className="flex dark:text-white items-center gap-3 mt-3 hover:scale-105 hover-animation"
                >
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 7 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25961 0.25961C0.605756 -0.0865366 1.16697 -0.0865366 1.51312 0.25961L6.24039 4.98688C6.58654 5.33303 6.58654 5.89424 6.24039 6.24039L1.51312 10.9677C1.16697 11.3138 0.605756 11.3138 0.25961 10.9677C-0.0865366 10.6215 -0.0865366 10.0603 0.25961 9.71416L4.36013 5.61364L0.25961 1.51312C-0.0865366 1.16697 -0.0865366 0.605756 0.25961 0.25961Z"
                    />
                  </svg>
                  <p className="font-bold dark:text-white text-[18px]">
                    Termini e Condizioni Generali
                  </p>
                </div>
              </a>
              <a aria-label="" href="">
                <div
                  className="flex dark:text-white items-center gap-3 mt-3 hover:scale-105 hover-animation"
                >
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 7 12"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.25961 0.25961C0.605756 -0.0865366 1.16697 -0.0865366 1.51312 0.25961L6.24039 4.98688C6.58654 5.33303 6.58654 5.89424 6.24039 6.24039L1.51312 10.9677C1.16697 11.3138 0.605756 11.3138 0.25961 10.9677C-0.0865366 10.6215 -0.0865366 10.0603 0.25961 9.71416L4.36013 5.61364L0.25961 1.51312C-0.0865366 1.16697 -0.0865366 0.605756 0.25961 0.25961Z"
                    />
                  </svg>
                  <p className="font-bold dark:text-white text-[18px]">
                    Politica Privacy & Politica Cookie
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div
            className="bg-primary-blue md:flex justify-between p-4 px-6 mt-7 rounded-md"
          >
            <div className="flex items-center gap-4">
              <a
                target="_blank"
                aria-label="telegram"
                href="https://t.me/TradingMillimetrico"
              ><img src="Images/telegram.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="messenger"
                href="https://m.me/tradingmillimetrico"
              ><img src="Images/messenger.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="youtube"
                href="https://www.youtube.com/channel/UCKBpboeL03_V9XrYZr2FTVw"
              ><img src="Images/youtube.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="facebook"
                href="https://www.facebook.com/TradingMillimetrico"
              ><img src="Images/facebook.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="instagram"
                href="https://www.instagram.com/tradingmillimetrico/"
              ><img src="Images/instagram.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="message"
                href="mailto:info@tradingmillimetrico.com"
              ><img src="Images/message.svg" alt=""
                /></a>
              <a
                target="_blank"
                aria-label="whatsapp"
                href="https://wa.me/34691373862"
              ><img src="Images/whatsapp.svg" alt=""
                /></a>
            </div>
            <h1 className="text-white font-[17px] mt-3 md:mt-0">
              ©2022 - Trading Millimetrico® - N.I.E.: Y9078749-L - Tutti i diritti
              riservati
            </h1>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
