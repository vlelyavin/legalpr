import { Row } from "../../../components/Row";
import "./Goals.css";

export const Goals = () => {
  const items = [
    {
      title: "Invite",
      image: `<svg width="37" height="41" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.25 25.7225V29.6401C18.077 29.2256 16.8149 29 15.5 29C9.28679 29 4.25 34.0368 4.25 40.25H0.5C0.5 31.9657 7.21572 25.25 15.5 25.25C16.7949 25.25 18.0515 25.4141 19.25 25.7225ZM15.5 23.375C9.28438 23.375 4.25 18.3406 4.25 12.125C4.25 5.90937 9.28438 0.875 15.5 0.875C21.7156 0.875 26.75 5.90937 26.75 12.125C26.75 18.3406 21.7156 23.375 15.5 23.375ZM15.5 19.625C19.6437 19.625 23 16.2688 23 12.125C23 7.98125 19.6437 4.625 15.5 4.625C11.3562 4.625 8 7.98125 8 12.125C8 16.2688 11.3562 19.625 15.5 19.625ZM26.75 30.875V25.25H30.5V30.875H36.125V34.625H30.5V40.25H26.75V34.625H21.125V30.875H26.75Z"
      fill="white"
    />
  </svg>`,
      text: "Leverage paid social media ads or other tools to increase page Likes, Follows, etc. to targeted recipients.",
    },

    {
      title: "Engage",
      image: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.49992 8.49998H31.4999V31.5H8.49992V8.49998ZM8.49992 0.833313H12.3333V6.58331H8.49992V0.833313ZM8.49992 33.4166H12.3333V39.1666H8.49992V33.4166ZM0.833252 8.49998H6.58325V12.3333H0.833252V8.49998ZM0.833252 27.6666H6.58325V31.5H0.833252V27.6666ZM33.4166 8.49998H39.1666V12.3333H33.4166V8.49998ZM33.4166 27.6666H39.1666V31.5H33.4166V27.6666ZM27.6666 0.833313H31.4999V6.58331H27.6666V0.833313ZM27.6666 33.4166H31.4999V39.1666H27.6666V33.4166Z" fill="white"/>
      </svg>
      `,
      text: "Interaction through social media via industry-relevant postings, conversations, messages, Tweets.",
    },

    {
      title: "Nurture",
      image: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99012 1.36105C8.76457 0.374698 11.9816 0.99185 14.2023 3.21253C16.7243 5.73458 17.1782 9.54167 15.5636 12.5262L39.6581 36.6233L36.4762 39.8053L12.381 15.7097C9.39624 17.3255 5.58795 16.8721 3.06532 14.3495C0.84401 12.1282 0.227128 8.90996 1.21468 6.13497L6.24732 11.1675C7.56532 12.4855 9.70226 12.4855 11.0203 11.1675C12.3383 9.84947 12.3383 7.71253 11.0203 6.39453L5.99012 1.36105ZM29.3167 5.59902L36.4762 1.62156L39.6581 4.80353L35.6806 11.963L31.7033 12.7585L26.9301 17.5314L23.7482 14.3495L28.5211 9.5765L29.3167 5.59902ZM14.2023 23.8953L17.3843 27.0775L5.45181 39.0099C4.57314 39.8885 3.1485 39.8885 2.26983 39.0099C1.45392 38.1938 1.39564 36.9073 2.09499 36.0242L2.26983 35.8279L14.2023 23.8953Z" fill="white"/>
      </svg>
      `,
      text: "Posts that followers would find humorous or interesting.",
    },

    {
      title: "Promote",
      image: `<svg width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.2787 14.677C32.221 6.4909 25.2241 0.166687 16.7502 0.166687C7.54541 0.166687 0.0834961 7.6286 0.0834961 16.8334C0.0834961 20.7759 1.45239 24.3986 3.74079 27.2523C5.42414 29.3515 6.33418 31.6775 6.33402 34.1377L6.3335 41.8334H25.0835L25.0856 35.5834H29.2502C31.5514 35.5834 33.4168 33.7179 33.4168 31.4167V25.3146L37.4987 23.5661C38.2137 23.2598 38.276 22.5348 37.9672 22.0494L33.2787 14.677ZM4.25016 16.8334C4.25016 9.92979 9.8466 4.33335 16.7502 4.33335C23.0508 4.33335 28.347 9.02379 29.1462 15.2108L29.2652 16.1305L32.4787 21.1836L29.2502 22.5665V31.4167H20.9204L20.9183 37.6667H10.5004L10.5007 34.1381C10.5009 30.7234 9.27027 27.4875 6.99137 24.6456C5.22554 22.4436 4.25016 19.7186 4.25016 16.8334ZM42.07 33.7134L38.6029 31.4019C40.591 28.4254 41.7502 24.8481 41.7502 21.0002C41.7502 17.1521 40.591 13.5748 38.6029 10.5984L42.07 8.28692C44.5002 11.9247 45.9168 16.297 45.9168 21.0002C45.9168 25.7034 44.5002 30.0754 42.07 33.7134Z" fill="white"/>
      </svg>
      
`,
      text: "Promotional posts that effectively communicate your unique selling points.",
    },
  ];
  return (
    <Row>
      {items.map((item, idx) => (
        <div className="goals__item" key={idx}>
          <div className="goals__item__title">
            <div className="goals__item__icon" dangerouslySetInnerHTML={{ __html: item.image }}></div>
            <div className="goals__item__title__text">{item.title}</div>
          </div>
          <div className="goals__item__text">{item.text}</div>
        </div>
      ))}
    </Row>
  );
};
