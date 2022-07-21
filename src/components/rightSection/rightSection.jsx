import { Card } from "./card/card";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Input } from "./input/input";
import { Medias } from "./medias/medias";
import "./rightSection.css";
export const RightSection = () => {
  return (
    <div className="right-wrapper">
      <Header />
      <Input />
      <Card />
      <Medias/>
      <Footer />
    </div>
  );
};
