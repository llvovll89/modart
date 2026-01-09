import {useState} from "react";
import {auth} from "../../firebase/firebase";
import {
    ButtonGroup,
    CloseButton,
    Overlay,
    ResetPassWordForm,
    SendButton,
} from "./styles/ResetPassWordForm";

export const ResetPassword = ({resetBtn, setResetBtn}) => {
    const [resetEmail, setResetEmail] = useState("");

    const sendPasswordResetEmail = async (email) => {
        try {
            await auth.sendPasswordResetEmail(email);
            window.alert("비밀번호 재설정 이메일이 전송되었습니다.");
            setResetEmail("");
            setResetBtn(!resetBtn);
        } catch (error) {
            window.alert("이메일 전송에 실패하였습니다.", error);
        }
    };

    return (
        <Overlay>
            <ResetPassWordForm>
                <h2>비밀번호 재설정</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendPasswordResetEmail(resetEmail);
                    }}
                >
                    <div className="desc">
                        <p>비밀번호 재설정을 위한 이메일을 입력해주세요.</p>
                        <p>등록된 이메일로 전송됩니다.</p>
                    </div>
                    <label htmlFor="email2">로그인 이메일</label>
                    <input
                        id="email2"
                        type="email"
                        placeholder="가입 시 사용한 이메일"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        required
                    />

                    <ButtonGroup>
                        <SendButton type="submit">전송하기</SendButton>
                        <CloseButton
                            type="button"
                            onClick={() => setResetBtn(false)}
                        >
                            닫기
                        </CloseButton>
                    </ButtonGroup>
                </form>
            </ResetPassWordForm>
        </Overlay>
    );
};
