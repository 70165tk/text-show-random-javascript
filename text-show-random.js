const source = document.querySelector("#text-source");
const answer = document.querySelector("#text-answer");
const randomButton = document.querySelector("#random");
const copied = document.querySelector("#copied");
if (source && answer && randomButton) {
    randomButton.addEventListener('click', function () {
        const source_str = source.value;
        const source_arr = source_str.split(/\r\n|\n/);
        answer.value = source_arr[Math.floor(Math.random() * source_arr.length)]
    })
    answer.addEventListener('click', function () {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(answer.value).then(function () {
                copied.classList.add('is-visible')
                setTimeout(() => {
                    message.classList.remove('is-visible')
                }, 1600)
            })
        } else {
            answer.select()
            document.execCommand('copy')
            copied.classList.add('is-visible')
            setTimeout(() => {
                message.classList.remove('is-visible')
            }, 1600)
        }
    })
} else {
    console.log("いずれかのページ要素が見つかりません");
}
