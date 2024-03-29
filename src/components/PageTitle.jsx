import css from "./PageTitle.module.css";

export default function PageTitle({ text, children }) {
    return <h2 className={css.text}>{text} {children}</h2>
  
}