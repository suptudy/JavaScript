function validate() {

    if (vform.userId.value === "") {
        window.alert("아이디가 비어있습니다.");
        return false;
    }

    if (vform.password.value === "") {
        window.alert("패스워드가 비어있습니다.");
        return false;
    } else if (vform.password.value.length < 6) {
        window.alert("패스워드는 6자 이상입니다");
        return false;
    } else if (vform.password.value !== vform.passwordConfirm.value) {
        window.alert("패스워드와 패스워드 확인이 일치하지 않습니다.");
        return false;
    }

    return true;
}