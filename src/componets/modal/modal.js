import "./modal.scss";

export function openModal() {
  $(".modal").addClass("active");
}

export function closeModal() {
  $(".modal").removeClass("active");
}
