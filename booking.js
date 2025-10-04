function toggleDropdown(serviceId) {
  const dropdown = document.getElementById(serviceId + "-options");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function calculateTotal() {
  let total = 0;
  document.querySelectorAll('.option').forEach(cb => {
    if (cb.checked) total += parseInt(cb.value);
  });
  document.getElementById('totalAmount').value = total + " BDT";
}

function confirmSubmit(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to submit the form?")) {
    alert("Form submitted successfully!");
  }
  return false;
}

function nextPage() {
  document.getElementById('formSlider').style.transform = "translateX(-50%)";
}

function prevPage() {
  document.getElementById('formSlider').style.transform = "translateX(0%)";
}
