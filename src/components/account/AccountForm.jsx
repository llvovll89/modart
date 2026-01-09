import React, {useState} from "react";
import {Button, AuthForm, Input} from "../../styles/RecycleStyles";
import {useDispatch} from "react-redux";
import {signUp} from "../../store/reducers/authSlice";
import {googleLogin, signIn} from "../../store/reducers/loginSlice";
import {useNavigate, Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {FcGoogle, FcAddImage} from "react-icons/fc";
import Alert from "../common/Alert";
import {auth} from "../../firebase/firebase";
import {MAIN} from "../../routes/route/path";
import {ResetPassword} from "./ResetPassword";

const AccountForm = ({text, link}) => {
    const [authValue, setAuthValue] = useState({});
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [resetBtn, setResetBtn] = useState(false);
    const [alertText, setAlertText] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === "email") {
            const isValidDomain =
                value.endsWith("naver.com") || value.endsWith("gmail.com");
            setAuthValue({
                ...authValue,
                [name]: value,
                isValidEmail: isValidDomain,
            });
        } else if (name === "nickname") {
            const {name, value} = e.target;
            const valueTrim = value.trim();
            setAuthValue({
                ...authValue,
                [name]: valueTrim,
            });
        } else {
            setAuthValue({
                ...authValue,
                [name]: value,
            });
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const {email, password, nickname, photo, isValidEmail} = authValue;
        const photoVal = photo ? photo : "";
        const isFormValid =
            email !== "" && password !== "" && nickname !== "" && isValidEmail;

        if (isFormValid) {
            if (text === "회원가입") {
                try {
                    await dispatch(
                        signUp({email, password, nickname, photo: photoVal})
                    ).unwrap();
                    setAlertText("회원가입에 성공하였습니다.");
                    setIsAlertVisible(true);
                    navigate("/account/login");
                } catch (error) {
                    setAlertText(
                        "회원가입에 실패하였습니다. 다시 시도해주세요."
                    );
                    setIsAlertVisible(true);
                    console.log(error);

                    setTimeout(() => {
                        setIsAlertVisible(false);
                    }, 2000);
                }
            } else if (text === "로그인") {
                try {
                    const user = await dispatch(signIn(authValue)).unwrap();
                    if (!user) {
                        setAlertText("회원가입을 하지 않은 유저입니다.");
                        setIsAlertVisible(true);
                        setTimeout(() => {
                            setIsAlertVisible(false);
                        }, 2000);
                        return;
                    }
                    navigate("/");
                } catch (error) {
                    setAlertText("이메일 또는 비밀번호가 올바르지 않습니다.");
                    setIsAlertVisible(true);
                    setTimeout(() => {
                        setIsAlertVisible(false);
                    }, 2000);
                }
            }
        } else {
            if (email === "") {
                setAlertText("이메일을 입력해주세요.");
            } else if (password === "") {
                setAlertText("비밀번호를 입력해주세요.");
            } else if (nickname === "") {
                setAlertText("닉네임을 입력해주세요.");
            } else if (!isValidEmail) {
                setAlertText("naver & gmail 만 가능합니다.");
            } else if (email === "" && password === "") {
                setAlertText("email, password 입력해주시기 바랍니다.");
            }

            setIsAlertVisible(true);
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 2000);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await dispatch(googleLogin()).unwrap();
            setAlertText("구글계정 로그인 되셨습니다.");
            navigate("/");
        } catch (error) {
            setAlertText(error.message);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAuthValue({
            ...authValue,
            photo: file,
        });
    };

    return (
        <AuthForm className={resetBtn ? "active" : ""}>
            <h1 className="logo">MODART</h1>
            {isAlertVisible && <Alert text={alertText} />}
            <div className="container">
                <form onSubmit={submitHandler}>
                    {text === "회원가입" ? (
                        <>
                            <div className="area">
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="area">
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="area">
                                <Input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                />
                                <label htmlFor="nickname">닉네임</label>
                            </div>
                            <div className="area file">
                                <input
                                    type="file"
                                    id="photo"
                                    style={{display: "none"}}
                                    name="photo"
                                    onChange={handleFileChange}
                                />

                                <label htmlFor="photo" className="file_label">
                                    <span>
                                        <FcAddImage />
                                    </span>
                                    <p>Profile Image</p>
                                </label>
                            </div>
                            <Button type="submit">{text}</Button>
                        </>
                    ) : (
                        <>
                            <div className="area">
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="email">email</label>
                            </div>
                            <div className="area">
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="login_btn_container">
                                <Button type="submit">{text}</Button>
                                <div className="socialLogin">
                                    <Button
                                        className="googleLogin"
                                        onClick={handleGoogleLogin}
                                    >
                                        <div className="googleIcon">
                                            <FcGoogle />
                                        </div>
                                        <p className="googleText">
                                            Sign In With Google
                                        </p>
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </form>

                <div className="signUp_link">
                    <Link
                        to={`/account/${
                            link === "회원가입" ? "signup" : "login"
                        }`}
                    >
                        {link}
                    </Link>

                    <span className="boundary"></span>

                    {text === "로그인" && (
                        <div className="resetPassword">
                            <button
                                className="reset"
                                onClick={() => setResetBtn(!resetBtn)}
                            >
                                비밀번호 재설정
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {resetBtn && (
                <ResetPassword resetBtn={resetBtn} setResetBtn={setResetBtn} />
            )}

            <button className="back_history" onClick={() => navigate(MAIN)}>
                <BsArrowLeft />
            </button>
        </AuthForm>
    );
};

export default AccountForm;
