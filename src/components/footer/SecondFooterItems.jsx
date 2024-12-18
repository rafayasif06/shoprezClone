import React from "react";
import facebookIcon from "../../assets/footer/facebookIcon.svg";
import instagramIcon from "../../assets/footer/instagramIcon.svg";
import linkedInIcon from "../../assets/footer/linkedInIcon.svg";
import masterCardIcon from "../../assets/footer/masterCardIcon.svg";
import skrillIcon from "../../assets/footer/skrillIcon.svg";
import twitterIcon from "../../assets/footer/twitterIcon.svg";
import visaIcon from "../../assets/footer/visaIcon.svg";
import youtubeIcon from "../../assets/footer/youtubeIcon.svg";
import paypalIcon from "../../assets/footer/paypalIcon.svg";

export const AccountsLinks = [
  {
    accounts: [
      facebookIcon,
      instagramIcon,
      linkedInIcon,
      twitterIcon,
      youtubeIcon,
    ],
  },
];
export const PaymentMethods = [
  {
    accounts: [visaIcon, masterCardIcon, paypalIcon, skrillIcon],
  },
];

const SecondFooterItems = () => {
  return <></>;
};

export default SecondFooterItems;
