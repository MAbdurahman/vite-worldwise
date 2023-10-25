import { useNavigate } from "react-router-dom";
import Button from "../button/Button.jsx";

export default function BackButton() {
    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        console.log('BackButton handleClick', e.target);
        navigate(-1);
    }

    return (
        <Button
            type="back"
            onClick={handleClick}
        >
            &larr; Back
        </Button>
    );
};