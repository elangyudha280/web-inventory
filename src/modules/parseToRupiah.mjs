


// function to change numberupiahr to format string
function parseToRupiah(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default parseToRupiah;