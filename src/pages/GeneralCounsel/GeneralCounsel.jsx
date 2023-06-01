import { useEffect, useRef, useState } from "react";
import { ContactForm } from "../../components/ContactForm";
import { FixedButton } from "../../components/FixedButton";
import { Row } from "../../components/Row";
import { RowItem } from "../../components/RowItem";
import { Title } from "../../components/Title";
import { TitleSection } from "../../components/TitleSection";
import "./GeneralCounsel.css";

export const GeneralCounsel = () => {
  const contactFormRef = useRef();
  const fixedButtonRef = useRef();
  const [isFixedButtonVisible, setFixedButtonVisibility] = useState(true);
  const style = {
    padding: "5px 10px",
    borderRadius: "24px",
  };

  const counselFirstRowItems = [
    {
      text: "Entity Formation",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.9998 0.666656C29.1198 0.666656 37.3332 8.87999 37.3332 19C37.3332 29.12 29.1198 37.3333 18.9998 37.3333C8.87984 37.3333 0.666504 29.12 0.666504 19C0.666504 8.87999 8.87984 0.666656 18.9998 0.666656ZM18.9998 33.6667C27.1032 33.6667 33.6665 27.1033 33.6665 19C33.6665 10.8967 27.1032 4.33332 18.9998 4.33332C10.8965 4.33332 4.33317 10.8967 4.33317 19C4.33317 27.1033 10.8965 33.6667 18.9998 33.6667ZM20.8332 19V26.3333H17.1665V19H11.6665L18.9998 11.6667L26.3332 19H20.8332Z" fill="white"/>
  </svg>
  `,
    },

    {
      text: "Bookkeeping & Audit",
      image: `<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5002 4.33332V31.3227C37.5002 31.6854 37.2862 32.0141 36.9546 32.1609L21.0002 39.224L5.04574 32.1609C4.71406 32.0141 4.50016 31.6854 4.50016 31.3227V4.33332H0.833496V0.666656H41.1668V4.33332H37.5002ZM8.16683 4.33332V29.5327L21.0002 35.2142L33.8335 29.5327V4.33332H8.16683ZM13.6668 11.6667H28.3335V15.3333H13.6668V11.6667ZM13.6668 19H28.3335V22.6667H13.6668V19Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Purchase and Sale of a Businesses",
      image: `<svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50911 0.5H35.5092C36.5217 0.5 37.3425 1.32082 37.3425 2.33333V31.6667C37.3425 32.6792 36.5217 33.5 35.5092 33.5H2.50911C1.4966 33.5 0.675781 32.6792 0.675781 31.6667V2.33333C0.675781 1.32082 1.4966 0.5 2.50911 0.5ZM33.6758 17H4.34245V29.8333H33.6758V17ZM33.6758 9.66667V4.16667H4.34245V9.66667H33.6758Z" fill="white"/>
      </svg>
      
  `,
    },
    {
      text: "Buy-Sell Agreements",
      image: `<svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0.5V4.16667H0.5V0.5H17ZM24.3333 29.8333V33.5H0.5V29.8333H24.3333ZM35.3333 15.1667V18.8333H0.5V15.1667H35.3333Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const counselSecondRowItems = [
    {
      text: "Company Formations",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.83317 8.16668V2.66668C9.83317 1.65416 10.654 0.833344 11.6665 0.833344H26.3332C27.3457 0.833344 28.1665 1.65416 28.1665 2.66668V8.16668H35.4998C36.5124 8.16668 37.3332 8.9875 37.3332 10V35.6667C37.3332 36.6792 36.5124 37.5 35.4998 37.5H2.49984C1.48732 37.5 0.666504 36.6792 0.666504 35.6667V10C0.666504 8.9875 1.48732 8.16668 2.49984 8.16668H9.83317ZM4.33317 28.3333V33.8333H33.6665V28.3333H4.33317ZM4.33317 24.6667H33.6665V11.8333H4.33317V24.6667ZM13.4998 4.50001V8.16668H24.4998V4.50001H13.4998ZM17.1665 19.1667H20.8332V22.8333H17.1665V19.1667Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Terms of Use and Privacy Policies",
      image: `<svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.5002 4.33332V31.3227C37.5002 31.6854 37.2862 32.0141 36.9546 32.1609L21.0002 39.224L5.04574 32.1609C4.71406 32.0141 4.50016 31.6854 4.50016 31.3227V4.33332H0.833496V0.666656H41.1668V4.33332H37.5002ZM8.16683 4.33332V29.5327L21.0002 35.2142L33.8335 29.5327V4.33332H8.16683ZM13.6668 11.6667H28.3335V15.3333H13.6668V11.6667ZM13.6668 19H28.3335V22.6667H13.6668V19Z" fill="white"/>
      </svg>
      
  `,
    },

    {
      text: "Drafting and Negotiating Contracts",
      image: `<svg width="33" height="37" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.625 11.3333V34.6128C32.625 35.6106 31.8281 36.4167 30.8452 36.4167H2.15484C1.1722 36.4167 0.375 35.6212 0.375 34.6397V2.36032C0.375 1.39911 1.17892 0.583344 2.17063 0.583344H21.8693L32.625 11.3333ZM29.0417 13.125H20.0833V4.16668H3.95833V32.8333H29.0417V13.125ZM9.33333 9.54168H14.7083V13.125H9.33333V9.54168ZM9.33333 16.7083H23.6667V20.2917H9.33333V16.7083ZM9.33333 23.875H23.6667V27.4583H9.33333V23.875Z" fill="white"/>
      </svg>
      
  `,
    },
    {
      text: "Business Disputes",
      image: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.7457 1.38271C20.5577 0.174657 22.9119 0.149614 24.7493 1.31884L32.3672 6.16656H35.5C36.5125 6.16656 37.3333 6.98738 37.3333 7.99989V24.4998C37.3333 25.5124 36.5125 26.3332 35.5 26.3332H32.7138C32.8229 28.0699 32.0047 29.8354 30.3587 30.823L21.0208 36.4258C19.842 37.133 18.3786 37.1165 17.2246 36.4119C15.9407 37.5473 13.9643 37.6723 12.5306 36.5457L3.10584 29.1405C1.70075 28.0367 1.34544 26.1506 2.07094 24.6553C1.18487 23.9605 0.666992 22.8966 0.666992 21.77V8C0.666992 6.98749 1.48781 6.16667 2.50033 6.16667H11.5697L18.7457 1.38271ZM4.65017 22.0162L5.91889 20.9061C8.17427 18.9325 11.5944 19.128 13.6103 21.3456L18.5644 26.795C20.1584 28.5486 20.4492 31.1248 19.2898 33.1882L28.4722 27.6788C28.9881 27.3694 29.1748 26.7506 28.9825 26.2294L20.8661 14.8668C20.4102 14.2285 19.5987 13.951 18.8474 14.1764L14.2911 15.5433C12.3531 16.1246 10.2524 15.595 8.82164 14.1643L8.2849 13.6276C7.24354 12.5862 6.97425 11.1042 7.41247 9.83334H4.33366V21.77L4.65017 22.0162ZM22.7808 4.41228C22.1683 4.02253 21.3837 4.03087 20.7796 4.43356L10.8776 11.0348L11.4144 11.5716C11.8913 12.0485 12.5915 12.225 13.2375 12.0312L17.7938 10.6643C20.0477 9.98816 22.4822 10.8208 23.8499 12.7356L30.9434 22.6665H33.6666V9.83323H32.3672C31.6698 9.83323 30.9868 9.63438 30.3985 9.26L22.7808 4.41228ZM8.33341 23.6655L5.3712 26.2574L14.7959 33.6626L16.0864 31.4042C16.4806 30.7145 16.3856 29.8493 15.8512 29.2614L10.8972 23.812C10.2253 23.0728 9.0852 23.0077 8.33341 23.6655Z" fill="white"/>
      </svg>
      
  `,
    },
  ];

  const imageStyle = {
    background: "var(--purple)",
    width: "80px",
    height: "80px",
    boxShadow: "0px 4px 27px rgba(0, 0, 0, 0.25)",
  };

  const handleClick = () => {
    const options = {
      block: "center",
      behavior: "smooth",
    };
    contactFormRef.current.scrollIntoView(options);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFixedButtonVisibility(false);
          } else {
            setFixedButtonVisibility(true);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(contactFormRef.current);
  }, []);
  return (
    <>
      <TitleSection>
        <Title>General Counsel</Title>
      </TitleSection>
      <Row style={{ marginTop: "40px" }}>
        {counselFirstRowItems.map((item, idx) => (
          <RowItem style={style} imageStyle={imageStyle} text={item.text} image={item.image} key={idx} />
        ))}
      </Row>
      <Row>
        {counselSecondRowItems.map((item, idx) => (
          <RowItem style={style} imageStyle={imageStyle} text={item.text} image={item.image} key={idx} />
        ))}
      </Row>
      {isFixedButtonVisible && <FixedButton ref={fixedButtonRef} onClick={handleClick} />}
      <ContactForm ref={contactFormRef} />
    </>
  );
};
