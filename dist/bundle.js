(()=>{const t=document.getElementById("addTodo"),e=document.getElementById("listTodo");let n=[];try{o(JSON.parse(localStorage.getItem("todos"))||[])}catch{}function o(t){let a="";t.forEach(((t,e)=>{a+=`   <div id="itemTodo${e}" class="itemTodo">\n      <input type="text" value="${t.name}" readonly />\n      <div class="buttonsTodo">\n        <button class="btnEdit" id="btnEdit${e}"><i class="fas fa-edit fa-lg"></i></button>\n        <button class="btnDelete" id="btnDelete${e}"><i class="fas fa-trash-alt fa-lg"></i></button>\n      </div>\n    </div>`})),e.innerHTML=a,function(t){t.forEach(((t,e)=>{document.getElementById(`btnDelete${e}`).addEventListener("click",(()=>{n.splice(e,1),o(n),localStorage.setItem("todos",JSON.stringify(n))}))}))}(t)}t.addEventListener("submit",(t=>{t.preventDefault();const e=document.getElementById("inputAdd");e.value.trim()?(n.push({name:e.value,isDone:!1}),o(n),localStorage.setItem("todos",JSON.stringify(n)),e.value=""):alert("Empty field, type something!")}))})();