import { forwardRef, useEffect, useState } from "react";
import "./FixedButton.css";
import classNames from "classnames";

export const FixedButton = forwardRef(({ onClick }, ref) => {
  const [isButtonVisible, setButtonVisibility] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 700) {
      setButtonVisibility(false);
    } else {
      setButtonVisibility(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        setButtonVisibility(false);
      } else {
        setButtonVisibility(true);
      }
    });
  }, []);
  return (
    <div className={classNames("fixed__button", { visible: isButtonVisible })} onClick={onClick} ref={ref}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.25 17.525V21.9451C23.25 22.6014 22.7426 23.1459 22.0881 23.1921C21.5414 23.2307 21.0954 23.25 20.75 23.25C9.70425 23.25 0.75 14.2958 0.75 3.25C0.75 2.90464 0.769313 2.45859 0.807938 1.91188C0.854213 1.25735 1.39867 0.75 2.05482 0.75H6.47513C6.79598 0.75 7.0647 0.993025 7.09691 1.31225C7.12584 1.59884 7.15272 1.82892 7.17759 2.00252C7.43044 3.7684 7.94691 5.4492 8.68587 7.00379C8.80449 7.25331 8.72714 7.55199 8.50231 7.71257L5.80444 9.63975C7.4469 13.4764 10.5236 16.5531 14.3602 18.1956L16.2839 15.5024C16.4465 15.2749 16.7487 15.1966 17.0012 15.3165C18.5557 16.0549 20.2364 16.5708 22.002 16.823C22.1745 16.8478 22.4031 16.8744 22.6877 16.9031C23.007 16.9354 23.25 17.2041 23.25 17.525Z"
          fill="white"
        />
      </svg>
    </div>
  );
});
