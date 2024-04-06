let todo = ["todo1", "todo2", "todo3"];
        let progress = ["progress1", "progress2", "progress3"];
        let done = ["done1", "done2", "done3"];

        let todoCol = document.getElementById("todo");
        let progressCol = document.getElementById("progress");
        let doneCol = document.getElementById("done");

        function renderTodo() {
            todoCol.innerHTML = "<h1>todo</h1>"; // Clear the previous content
            todo.forEach((element, index) => { // Added index parameter
                todoCol.innerHTML += `
                    <div class="task todo">
                        <p>${element}</p>
                        <button onclick="shiftToRight('todo', ${index})">&rarr;</button>
                     </div>  
                `;
            });
        }

        function renderProgress() {
            progressCol.innerHTML = "<h1>progress</h1>"; // Clear the previous content
            progress.forEach((element, index) => { // Added index parameter
                progressCol.innerHTML += `
                    <div class="task progress">
                        <p>${element}</p>
                        <button onclick="shiftToLeft('progress', ${index})">&larr;</button>
                        <button onclick="shiftToRight('progress', ${index})">&rarr;</button>
                     </div>  
                `;
            });
        }
        function renderDone() {
            doneCol.innerHTML = "<h1>done</h1>"; // Clear the previous content
            done.forEach((element, index) => { // Added index parameter
                doneCol.innerHTML += `
                    <div class="task done">
                        <p>${element}</p>
                        <button onclick="shiftToLeft('done', ${index})">&larr;</button> <!-- Changed to shiftToLeft -->
                    </div>  
                `;
            });
        }

        function shiftToRight(colName, index) {
            if (colName === "todo") {
                let itemToBeremoved = todo[index];
                todo = todo.filter((item, i) => i !== index);
                console.log("array after removal of item", todo, itemToBeremoved);
                renderTodo();
                progress.push(itemToBeremoved);
                renderProgress();
            } else if (colName === "progress") {
                let itemToBeremoved = progress[index];
                progress = progress.filter((item, i) => i !== index);
                console.log("array after removal of item", progress, itemToBeremoved);
                renderProgress();
                done.push(itemToBeremoved);
                renderDone();
            }
        }
        function shiftToLeft(colName, index) {
            if (colName === "done") {
                let itemToBeRemoved = done[index]; // Corrected variable name
                done = done.filter((item, i) => i !== index);
                console.log("array after removal of item", done, itemToBeRemoved);
                renderDone();
                progress.push(itemToBeRemoved); // Corrected variable name
                renderProgress();
            } else if (colName === "progress") {
                let itemToBeRemoved = progress[index]; // Corrected variable name
                progress = progress.filter((item, i) => i !== index);
                console.log("array after removal of item", progress, itemToBeRemoved);
                renderProgress();
                todo.push(itemToBeRemoved); // Corrected variable name
                renderTodo();
            }
        }
        

renderTodo();
renderProgress();
renderDone();

