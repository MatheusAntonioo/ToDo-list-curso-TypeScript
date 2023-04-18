import { Type } from "typescript";

(() => {
  const todo = {
    description: 'todo',
    done: false,
  };

  const reminder = {
    description: 'reminder',
    date: '17.04.2021',
  };

  const taskView = {
    render(tasks: Array<Object>) {
      const tasksList = document.getElementById('tasksList');
      while(tasksList?.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
      }

      tasks.forEach((task) => {
        const li = document.createElement('LI');
        const textNode = document.createTextNode(JSON.stringify(task));
        li.appendChild(textNode);
        tasksList?.appendChild(li);
      });
    },
  };

  const TaskController = (view: typeof taskView) => {
    const tasks: Array<Object> = [todo, reminder];

    const handleEvent = (event: Event) => {
      event.preventDefault();
      view.render(tasks);
    };

    document.getElementById('taskForm')?.addEventListener('submit', handleEvent);
  };

  TaskController(taskView);
})();
