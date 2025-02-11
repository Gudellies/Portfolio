const text=document.querySelector(".sec-text");
const textLoad = ()=>
{
    setTimeout(()=>
    {
        text.textContent = "Fresher"
    },0);

    setTimeout(()=>
        {
            text.textContent = "Learner"
        },4000);

        setTimeout(()=>
            {
                text.textContent = "Hardworker"
            },8000);
}
textLoad();
setInterval(textLoad,12000);