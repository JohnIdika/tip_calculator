function calculateTip () {
    let total = document.getElementById('total').value
    let errorMsg = document.getElementById('errorMsg')
    let rate =  document.getElementById('rate').value
    let tip = document.getElementById('tip')

    if (total == "" || isNaN(total)) {
        errorMsg.innerHTML = "Pleae enter a valid amount"
        return false
    }else {
        errorMsg.innerHTML = ""
        let tipSum = (rate/100) * total
        tip.value = tipSum.toLocaleString()
    }
}