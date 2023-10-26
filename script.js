const validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function search()
{
    const origin = document.querySelector("#origin-input").value.trim();
    const destination = document.querySelector("#destination-input").value.trim();

    if (origin == "")
    {
        alert("Please specify your origin.");
        return;
    }

    if (destination == "")
    {
        alert("Please specify a destination.");
        return;
    }

    document.querySelector("#origin-input").value = "";
    document.querySelector("#destination-input").value = "";

    setTimeout(() =>
    {
        document.querySelector("#loading-screen").style.display = "block";

        setTimeout(() =>
        {
            document.querySelector("#loading-screen").style.display = "none";

            document.querySelector("#from-final").innerHTML = origin;
            document.querySelector("#to-final").innerHTML = destination;

            var code = "";

            for (var i = 0; i <= 22; i++)
            {
                code += validChars.charAt(Math.floor(Math.random() * (validChars.length - 0 + 1)));
            }

            document.querySelector("#confirm-text-code").innerHTML = code;

            document.querySelector("#confirm-screen").style.display = "block";
        },
            4000);
    },
        10);
}

function hide_confirm_screen()
{
    document.querySelector("#confirm-screen").style.display = "none";
}
