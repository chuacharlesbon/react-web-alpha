import { FC, memo, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectUserLoading } from "../../redux/selectors/userSelectors";
import { useAppDispatch } from "../../redux/configureStore";
import { usersActions } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";
import { modalActions } from "../../redux/slices/modalSlice";
import { ModalExample2 } from "../../components/bootstrap/modal";

const Home: FC<{ myData: string }> = memo(({ myData }) => {
    const dispatch = useAppDispatch();

    const User = useSelector(selectUser);
    const userLoading = useSelector(selectUserLoading);
    const newData = useMemo(() => handleData(myData), [myData]);

    function handleData(name: string) {
        console.log(`handleData trigger at ${new Date()}`);
        return name;
    }

    // const systemModal = useSelector(selectModal);
    // const modalShow = useSelector(selectModalShow);

    console.log(`home trigger at ${new Date()}`);

    useEffect(() => {
        console.log(`init trigger at ${new Date()}`);
        const initUser = async () => {
            await dispatch(usersActions.login({
                email: "email",
                password: "password",
            }));
        }
        initUser();
        return () => {
            // Perform any necessary cleanup when the effect unmounts (e.g., removing event listeners)
            dispatch(usersActions.abort);
        };
    }, [])

    // const myModal = async () => {
    //     dispatch(modalActions.showModal({
    //         title: "New Message!",
    //         message: "Successfully updated",
    //         onClose: () => { },
    //         onSubmit: () => { },
    //     }));
    // }

    const onSubmit = () => {
        //
    }

    return (
        <>
            {/* <ModalExample
                isShow={modalShow}
                title={systemModal.title}
                message={systemModal.message}
                onClose={systemModal.onClose}
                onSubmit={systemModal.onSubmit}
            /> */}
            <div className="p-4">
                {
                    userLoading
                        ? <p>Page is loading ...</p>
                        : <><p>This is the Home page. {newData}{User.user_status}</p></>
                }
                <Link to='/about'>Test</Link>
                <ModalExample2
                    title="New Message!"
                    message="Successfully updated"
                    onClose={() => {}}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
})

export default Home;