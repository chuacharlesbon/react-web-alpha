import { FC, memo, useEffect } from "react"
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors/userSelectors";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/configureStore";
import { modalActions } from "../../redux/slices/modalSlice";
import { title } from "process";

const About: FC<{ myData: string }> = ({ myData }) => {
    const dispatch = useAppDispatch();
    const User = useSelector(selectUser);
    console.log(`about trigger at ${new Date()}`);

    useEffect(() => {
        document.title = myData;
        // Clean up function (optional)
        return () => {
            // Perform any necessary cleanup when the effect unmounts (e.g., removing event listeners)
            console.log('trigger cleanup');
        };
    }, [myData]);

    useEffect(() => {
        console.log(`about effect trigger at ${new Date()}`);
        // Clean up function (optional)
        return () => {
            // Perform any necessary cleanup when the effect unmounts (e.g., removing event listeners)
            dispatch(modalActions.showModal({
                title: "Test",
                message: "Test",
                onClose: () => { },
                onSubmit: () => { },
            }));
        };
    }, []);

    useEffect(() => {
        console.log(`about effect two trigger at ${new Date()}`);
    }, [User]);

    return (
        <div className="p-4">
            <p>This is the About page. {myData}{User.user_status}</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default About;