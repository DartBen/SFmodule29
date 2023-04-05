let session =  new Map();

function sessionInfo() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст/"));
    session.set("comment", prompt("Введите коментарий"));
    console.log(session.get("age"));
    console.log(session.get("comment"));
}

const postComment = sesion => {
    console.log(sesion.get("age"));
    console.log(sesion.get("comment"));
}
