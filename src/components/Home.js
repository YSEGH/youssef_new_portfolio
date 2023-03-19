import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { state, actions } = useContext(AppContext);

  const setRouteHandler = (route) => {
    actions.setRoute(route);
  };

  return (
    <div
      className={`component__home ${
        state.route !== "/" ? "component__home--active" : ""
      }`}
    >
      <div className="container__title-name">
        <button
          onClick={() => setRouteHandler("/")}
          className="component__nav-button component__nav-button-home"
        >
          <span>Seghrouchni </span>Youssef
        </button>
      </div>
      <div className="container__title-job">
        <h2 className="container__title-job_developer">Developer</h2>
        <div className="container__title-job-container">
          <h2 className="container__title-job_web">Web</h2>
          <h2 className="container__title-job_full">Full</h2>
          <h2 className="container__title-job_stack">Stack</h2>
        </div>
      </div>
      <div className="component__nav">
        <button
          onClick={() => setRouteHandler("/about")}
          className="component__nav-button component__nav-button-about"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.302 10.9375C11.302 7.5145 14.0769 4.73959 17.5 4.73959C20.923 4.73959 23.6979 7.5145 23.6979 10.9375C23.6979 14.3605 20.923 17.1354 17.5 17.1354C14.0769 17.1354 11.302 14.3605 11.302 10.9375ZM17.5 6.92709C15.2851 6.92709 13.4895 8.72262 13.4895 10.9375C13.4895 13.1524 15.2851 14.9479 17.5 14.9479C19.7149 14.9479 21.5104 13.1524 21.5104 10.9375C21.5104 8.72262 19.7149 6.92709 17.5 6.92709Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.6666 21.5104C9.85444 21.5104 8.38538 22.9795 8.38538 24.7917V26.5246C8.38538 26.551 8.4045 26.5735 8.43054 26.5777C14.4371 27.5584 20.5629 27.5584 26.5694 26.5777C26.5954 26.5735 26.6145 26.551 26.6145 26.5246V24.7917C26.6145 22.9795 25.1455 21.5104 23.3333 21.5104H22.8362C22.7978 21.5104 22.7596 21.5165 22.723 21.5284L21.4608 21.9406C18.8871 22.781 16.1128 22.781 13.5391 21.9406L12.2769 21.5284C12.2404 21.5165 12.2022 21.5104 12.1637 21.5104H11.6666ZM6.19788 24.7917C6.19788 21.7714 8.64632 19.3229 11.6666 19.3229H12.1637C12.4328 19.3229 12.7001 19.3655 12.9559 19.449L14.2181 19.8611C16.3506 20.5575 18.6493 20.5575 20.7818 19.8611L22.044 19.449C22.2998 19.3655 22.5671 19.3229 22.8362 19.3229H23.3333C26.3536 19.3229 28.802 21.7714 28.802 24.7917V26.5246C28.802 27.6231 28.006 28.5596 26.9219 28.7366C20.6819 29.7554 14.318 29.7554 8.07806 28.7366C6.99396 28.5596 6.19788 27.623 6.19788 26.5246V24.7917Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setRouteHandler("/work")}
          className="component__nav-button component__nav-button-work"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9647 22.4623C12.1653 22.56 11.5964 23.2874 11.6942 24.0868C11.792 24.8863 12.5193 25.4551 13.3188 25.3573C14.1183 25.2596 14.6871 24.5322 14.5893 23.7328C14.4915 22.9333 13.7642 22.3645 12.9647 22.4623Z"
              fill="white"
            />
            <path
              d="M8.09102 18.6507C7.99325 17.8512 8.56208 17.1239 9.36154 17.0261C10.161 16.9284 10.8883 17.4972 10.9861 18.2966C11.0839 19.0961 10.5151 19.8234 9.7156 19.9212C8.91614 20.019 8.18879 19.4502 8.09102 18.6507Z"
              fill="white"
            />
            <path
              d="M11.5485 10.8819C10.749 10.9796 10.1802 11.707 10.278 12.5065C10.3758 13.3059 11.1031 13.8747 11.9026 13.777C12.702 13.6792 13.2709 12.9519 13.1731 12.1524C13.0753 11.3529 12.348 10.7841 11.5485 10.8819Z"
              fill="white"
            />
            <path
              d="M22.8919 13.5349C22.7942 12.7355 23.363 12.0081 24.1625 11.9103C24.9619 11.8126 25.6893 12.3814 25.787 13.1809C25.8848 13.9803 25.316 14.7077 24.5165 14.8054C23.7171 14.9032 22.9897 14.3344 22.8919 13.5349Z"
              fill="white"
            />
            <path
              d="M17.4893 15.8646C16.6898 15.9624 16.121 16.6898 16.2188 17.4892C16.3165 18.2887 17.0439 18.8575 17.8433 18.7597C18.6428 18.662 19.2116 17.9346 19.1138 17.1352C19.0161 16.3357 18.2887 15.7669 17.4893 15.8646Z"
              fill="white"
            />
            <path
              d="M16.6149 10.2623C16.5172 9.4628 17.086 8.73545 17.8855 8.63768C18.6849 8.53991 19.4123 9.10874 19.51 9.9082C19.6078 10.7077 19.039 11.435 18.2395 11.5328C17.4401 11.6305 16.7127 11.0617 16.6149 10.2623Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.28551 17.1554C3.47582 9.30489 9.99417 3.09508 17.8447 3.28539C25.6952 3.47569 31.905 9.99405 31.7147 17.8445C31.7026 18.3417 31.5355 18.7959 31.2276 19.1699C30.9331 19.5276 30.5519 19.7622 30.1757 19.9192C29.4436 20.2248 28.5259 20.3207 27.6178 20.3268C23.6968 20.3533 20.2911 23.7259 20.0685 27.7035C20.0166 28.6315 19.8584 29.5754 19.459 30.3171C19.2522 30.7011 18.9617 31.0665 18.5549 31.331C18.1384 31.6018 17.6608 31.7268 17.1555 31.7145C9.30501 31.5242 3.0952 25.0059 3.28551 17.1554ZM17.7917 5.47225C11.1489 5.31122 5.6334 10.5657 5.47237 17.2084C5.31134 23.8511 10.5658 29.3667 17.2085 29.5277C17.3078 29.5301 17.3446 29.5087 17.3626 29.497C17.3903 29.479 17.4545 29.4257 17.533 29.28C17.7041 28.9622 17.8385 28.4021 17.8845 27.5813C18.168 22.5138 22.4649 18.1741 27.603 18.1394C28.4227 18.1338 28.9979 18.0404 29.333 17.9005C29.4513 17.8512 29.5066 17.8094 29.5278 17.7904C29.6882 11.1482 24.434 5.63326 17.7917 5.47225Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setRouteHandler("/contact")}
          className="component__nav-button component__nav-button-contact"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.51705 14.3739C11.1236 20.0496 15.7618 24.5619 21.5277 27.0069L21.5459 27.0146L22.6598 27.5111C24.0782 28.1431 25.7454 27.6942 26.6548 26.4356L28.5133 23.8635C28.6268 23.7063 28.5975 23.4879 28.4467 23.3662L25.2023 20.7488C25.041 20.6186 24.8038 20.649 24.6804 20.8154L23.4177 22.5193C23.111 22.9332 22.5572 23.0769 22.088 22.8646C17.7766 20.9134 14.312 17.4489 12.3609 13.1374C12.1485 12.6682 12.2923 12.1144 12.7061 11.8077L14.41 10.545C14.5765 10.4216 14.6068 10.1845 14.4767 10.0232L11.8589 6.77833C11.7372 6.62752 11.5188 6.59822 11.3617 6.71164L8.77568 8.57854C7.5087 9.49319 7.06251 11.1744 7.70923 12.597L8.51618 14.372C8.51647 14.3726 8.51676 14.3732 8.51705 14.3739ZM20.6645 29.0169C14.3994 26.3575 9.36036 21.4531 6.52821 15.2847L6.5265 15.281L5.71786 13.5023C4.64 11.1314 5.38365 8.32933 7.49529 6.80492L10.0813 4.93802C11.1811 4.14409 12.7098 4.34914 13.5614 5.40482L16.1792 8.64967C17.09 9.77867 16.8779 11.4388 15.7124 12.3025L14.7361 13.0261C16.3853 16.2262 18.9992 18.8401 22.1994 20.4894L22.9229 19.513C23.7866 18.3476 25.4468 18.1354 26.5758 19.0462L29.8202 21.6636C30.8762 22.5156 31.081 24.0448 30.2864 25.1446L28.4279 27.7167C26.9122 29.8145 24.1335 30.5625 21.7695 29.5093L20.6645 29.0169Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}