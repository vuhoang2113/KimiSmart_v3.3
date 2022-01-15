import { useTranslation } from "react-i18next";

const Paragraph = (props) => {
    const { t, i18n } = useTranslation();
    return <p className="mb-4">{t(props.json)}</p>;
};

export default Paragraph;
