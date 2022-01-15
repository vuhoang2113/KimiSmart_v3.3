import { BsArrowUp } from "react-icons/bs";

const GoToTop = () => {
    return (
        <a
            href="#top"
            className="text-green-800 fixed bottom-16 right-2 flex justify-center items-center border-2 rounded-full p-2 bg-gray-200 opacity-95 hover:bg-gray-300"
        >
            <BsArrowUp />
        </a>
    );
};

export default GoToTop;
