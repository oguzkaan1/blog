import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import "./AppWrapper.scss";

export const AppWrapper = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
