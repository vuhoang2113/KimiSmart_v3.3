import { useTranslation } from "react-i18next";

const FirstHeading = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <h1 className="text-center text-gray-800 text-3xl font-bold">
            {t(props.json)}
        </h1>
    );
};

export default FirstHeading;
