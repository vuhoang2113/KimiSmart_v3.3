import { useTranslation } from "react-i18next";

const ThirdHeading = (props) => {
    const { t, i18n } = useTranslation();
    return (
        <h3 className="text-green-900 text-lg underline font-semibold mb-4">
            {t(props.json)}
        </h3>
    );
};

export default ThirdHeading;
