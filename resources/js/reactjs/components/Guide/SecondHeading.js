import { useTranslation } from "react-i18next";

const SecondHeading = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <h2 className="text-blue-600 text-xl font-bold mb-4">
            {t(props.json)}
        </h2>
    );
};

export default SecondHeading;
