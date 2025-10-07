export function openReservation() {
    window.dispatchEvent(new CustomEvent("open-reservation"));
  }
  