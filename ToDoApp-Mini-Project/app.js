let body = document.querySelector("body");
let btn = document.querySelector("button");
let inp = document.querySelector(".input");
let ul = document.querySelector("ul");
let divMain = document.querySelector(".div");

inp.addEventListener("click",function(){
    inp.classList.add("clk");
});

inp.addEventListener("blur", function () {
  this.classList.remove("clk");
});

btn.addEventListener("click",function(){
const filter = inp.value.replace(/[^a-zA-Z]/g," ");

    if(filter != ""){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText =  filter;
        li.classList.add("li");

        let checkBox = document.createElement("Input");
        checkBox.type = "checkbox";
        checkBox.classList.add("checkBox");
        li.prepend(checkBox);

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.classList.add("delBtn");
        li.appendChild(delBtn);

        let doneBtn = document.createElement("button");
        doneBtn.innerText = "Marks as done";
        doneBtn.classList.add("doneBtn");
        li.appendChild(doneBtn);

        let div = document.createElement("div");
        div.innerText = "Task added Sucessfully";
        div.classList.add("hidden");
        body.appendChild(div);


        setTimeout(()=>{
            div.classList.remove("hidden");
            div.classList.add("alert");
                
        },1000);

        setTimeout(()=>{
            div.classList.remove("alert");
            div.innerText = "";
                // div.classList.add("hidden");
        },2000);

        doneBtn.addEventListener("click",function(){
            let alertDiv = document.createElement("div");
            alertDiv.innerText = "Congratulation! You completed your task";
            alertDiv.classList.add("hidden");
            body.appendChild(alertDiv);

            checkBox.checked = !checkBox.checked;

            if(checkBox.checked){

                setTimeout(()=>{
                    alertDiv.classList.remove("hidden");
                    alertDiv.classList.add("alertDiv");
                },1000);

                setTimeout(()=>{
                    alertDiv.classList.remove("alertDiv");
                    alertDiv.innerText = "";
                },2000);

            }
            else{

                let remDiv = document.createElement("div");
                remDiv.innerText = "Task status ?Incomplete"
                remDiv.classList.add("hidden");
                body.appendChild(remDiv);

                setTimeout(()=>{
                    remDiv.classList.remove("hidden");
                    remDiv.classList.add("remDiv");
                },1000);

                setTimeout(()=>{
                    remDiv.classList.remove("remDiv");
                    remDiv.innerText="";
                    // remDiv.classList.add("hidden");
                },2000);
            }
        });

        let delDiv = document.createElement("div")
        delDiv.innerText = "Task deleted sucessfully";
        delDiv.classList.add("hidden");
        body.appendChild(delDiv);

        delBtn.addEventListener("click",function(){
            li.remove();
            setTimeout(()=>{
                delDiv.classList.remove("hidden");
                delDiv.classList.add("delDiv");
            },1000);

            setTimeout(()=>{
                delDiv.classList.remove("delDiv");
                delDiv.innerText = "";
                // delDiv.classList.add("hidden");
            },2000);

        });

        inp.value = "";

    }
    else{
        return;
    }

});






  