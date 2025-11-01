document.getElementById("loanForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    document.getElementById("formMsg").innerHTML =
        `✅ Thanks ${name}! Your loan request for ₹${amount} has been submitted.`;
});
