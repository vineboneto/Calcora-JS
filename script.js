document.getElementById('incoming').addEventListener('keyup', (event) => {
    event.currentTarget.maxLength = 5
    let value = event.currentTarget.value
    value = value.replace(/\D/g)
    value = value.replace(/(\d{2})(\d{2})/, "$1:$2")
    event.currentTarget.value = value
})