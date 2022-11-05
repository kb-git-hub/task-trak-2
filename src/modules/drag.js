import { projectList } from "./project";
import { sortArray } from "./projectEdit";
import { q, qA } from "./utils";

export function dragAndDrop() {
    const project = q(".project");
    project.addEventListener("mousedown", enableDraggable);

    const tiles = project.querySelectorAll(".tile");
    tiles.forEach((tile) => dragStartEndEvent(tile));

    project.addEventListener("dragover", dragOver);
}

function enableDraggable(e) {
    const isMenuIcon = e.target.matches("[data-drag]");
    if (isMenuIcon) e.target.parentNode.draggable = true;
    else return;
}
export function dragStartEndEvent(tile) {
    tile.addEventListener("dragstart", () => tile.classList.add("dragging"));

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        tile.draggable = false;
        sortArray();
        console.log(projectList);
    });
}

function dragOver(e) {
    e.preventDefault();
    const project = q(".project");
    const dragging = q(".dragging");
    const form = q("#projectForm");
    const afterEl = getDragAfterElement(e.clientY);

    if (!afterEl) project.insertBefore(dragging, form); // append at end (before hidden form)
    else project.insertBefore(dragging, afterEl); //apend after above tile
}

function getDragAfterElement(y) {
    const projectTiles = [...qA(".project .tile:not(.dragging")];

    return projectTiles.reduce((closest, tile) => {
            const box = tile.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;

            if (offset < 0 && offset > closest.offset) {
                return {
                     offset: offset, 
                     element: tile 
                };
            } 
            else return closest;
        },{ offset: Number.NEGATIVE_INFINITY }).element;
}
