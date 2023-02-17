import styles from "@/styles/Home.module.css";
import Card from "@/components/Card";
import Header from "@/components/Header";
import CardList, { Receitas } from "@/components/CardList";

export default function Home() {
  const data: Receitas[] = [
    {
      id: 1,
      tempo: 10,
      porcoes: 30,
      titulo: "Roscovo",
      images: "/images/pexels-alesia-kozik-6544488 1.svg",
    },
    {
      id: 2,
      tempo: 10,
      porcoes: 30,
      titulo: "Arroz com pepino",
      images: "/images/pexels-alleksana-4050976 1.svg",
    },
    {
      id: 3,
      tempo: 10,
      porcoes: 30,
      titulo: "ovão",
      images: "/images/pexels-antoni-shkraba-6823326 1(1).svg",
    },
    {
      id: 4,
      tempo: 10,
      porcoes: 30,
      titulo: "Roscovo",
      images: "/images/pexels-lumn-1410235 1.svg",
    },
    {
      id: 5,
      tempo: 10,
      porcoes: 30,
      titulo: "Arroz com pepino",
      images: "/images/pexels-mikhail-nilov-6958019 1.svg",
    },
    {
      id: 6,
      tempo: 10,
      porcoes: 30,
      titulo: "ovão",
      images: "/images/pexels-antoni-shkraba-6823326 1(1).svg",
    },
    {
      id: 7,
      tempo: 10,
      porcoes: 30,
      titulo: "Roscovo",
      images: "/images/pexels-rodnae-productions-6646358 1.svg",
    },
    {
      id: 8,
      tempo: 10,
      porcoes: 30,
      titulo: "Arroz com pepino",
      images: "/images/pexels-trang-doan-824635 1.svg",
    },
    {
      id: 9,
      tempo: 10,
      porcoes: 30,
      titulo: "ovão",
      images: "/images/pexels-trang-doan-916904 1.svg",
    },
  ];

  return (
    <>
      <Header />
      <CardList receitas={data} />
    </>
  );
}
