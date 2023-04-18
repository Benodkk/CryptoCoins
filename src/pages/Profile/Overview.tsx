import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";

const containerStyle: React.CSSProperties | undefined = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
};

const elementStyle: React.CSSProperties | undefined = {
  display: "flex",
  gap: "40px",
};

interface Props {
  transactions: {
    [x: string]: any;
  }[];
}

const Overview = ({ transactions }: Props) => {
  const user = auth.currentUser?.uid;

  return <div style={containerStyle}></div>;
};

export default Overview;
