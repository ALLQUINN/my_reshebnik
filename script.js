document.addEventListener("DOMContentLoaded", () => {
    const block1TaskList = document.getElementById("block-1-task-list");
    const block2TaskList = document.getElementById("block-2-task-list");

    const block1Tasks = [
        { id: "1.1.1", name: "Задача 1.1.1" },
        { id: "1.1.2", name: "Задача 1.1.2" }
    ];

    const block2Tasks = [
        { id: "2.1.1", name: "Задача 2.1.1" },
        { id: "2.1.2", name: "Задача 2.1.2" }
    ];

    block1Tasks.forEach(task => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `tasks/task${task.id}.html`;
        link.textContent = task.name;
        listItem.appendChild(link);
        block1TaskList.appendChild(listItem);
    });

    block2Tasks.forEach(task => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `tasks/task${task.id}.html`;
        link.textContent = task.name;
        listItem.appendChild(link);
        block2TaskList.appendChild(listItem);
    });
});