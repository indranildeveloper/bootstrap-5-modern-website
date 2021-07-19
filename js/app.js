const tooltips = document.querySelectorAll('.tt')
tooltips.forEach((tool) => {
    new bootstrap.Tooltip(tool)
})