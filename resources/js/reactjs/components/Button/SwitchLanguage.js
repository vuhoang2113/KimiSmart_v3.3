import React, { useState, useEffect } from "react";
import i18n from "i18next";
import USFlag from "../../../../images/flag/US.svg";
import JPFlag from "../../../../images/flag/JP.svg";
const SwitchLanguage = () => {
    const [language, setLanguage] = useState(true);
    useEffect(() => {
        if (language) {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("jp");
        }
    }, [language]);
    return (
        <label className="flex items-center cursor-pointer">
            <div className="mr-3 text-gray-700 font-medium">
                <img
                    className="w-6 border rounded shadow-sm"
                    src={JPFlag}
                    alt="JP"
                />
            </div>
            <div className="relative">
                <input
                    type="checkbox"
                    name="show_button_text"
                    className="sr-only"
                    value={language}
                    defaultChecked={language ? true : false}
                    onChange={() => {
                        setLanguage(!language);
                    }}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">
                <img
                    className="w-6 border rounded shadow-sm"
                    src={USFlag}
                    alt="EN"
                />
            </div>
        </label>
    );
};

export { SwitchLanguage };
