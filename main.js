const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bar_Ys = $$(".bar_Y");
const bar_Xs = $$(".bar_X");
const texts  = $$(".text");

bar_Ys.forEach((tab, index) => {
    const bar_X = bar_Xs[index];
    const text = texts[index];

    tab.onclick = function () {
        $(".bar_Y.active").classList.remove("active");
        this.classList.add("active");

        $(".bar_X.active").classList.remove("active");
        bar_X.classList.add("active");

        $(".text.active").classList.remove("active");
        text.classList.add("active");
    };
});

bar_Xs.forEach((tab, index) => {
    const bar_Y = bar_Ys[index];
    const text = texts[index];

    tab.onclick = function () {
        $(".bar_X.active").classList.remove("active");
        tab.classList.add("active");

        $(".bar_Y.active").classList.remove("active");
        bar_Y.classList.add("active");

        $(".text.active").classList.remove("active");
        text.classList.add("active");
    };
});

