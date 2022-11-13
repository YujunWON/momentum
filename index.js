$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


// 현재 시간
function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let time_y_m_d = data['datetime'].substr(0,10);
    let time_h_m = data['datetime'].substr(11,5);
    $('#y_m_d').text(time_y_m_d);
    $('#h_m').text(time_h_m);

});
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `"${data['content']}"`;
            let author = ` ${data['author']} `;
            $('#content').text(content);
            $('#author').text(author);
        });
}
