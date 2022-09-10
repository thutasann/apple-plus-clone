import { useReducer } from "react";

const useToggle = () => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action) {
        case "on":
            return "on";
        default:
            return "off";
        }
    }, "off");
    return { state, dispatch };
};

export default useToggle;
