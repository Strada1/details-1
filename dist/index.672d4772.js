const ELEMENTS = {
    form: document.querySelector(".field"),
    input: document.querySelector(".field__input"),
    submit: document.querySelector(".field__button"),
    output: document.querySelector(".output")
};
function getDate() {
    const date = ELEMENTS.input.value;
    ELEMENTS.input.value = "";
}
ELEMENTS.form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getDate();
});

//# sourceMappingURL=index.672d4772.js.map
