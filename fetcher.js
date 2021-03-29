const templateGenerator = (date, text) => {
    const temp_data = `
    <div class="shitpost-container row">
        <div class="col-1 text-center">
            <img src="user.png"
                class="img-fluid rounded-circle user-image-mini mx-auto" alt="mist">
        </div>
        <div class="col-11">
            <div
                class="card post-card m-0 w-full d-flex flex-column justify-content-start py-0">
                <p class="text-white mb-0">
                    MIST &nbsp;&nbsp;<span
                        class="text-primary">@sudo.mist</span>
                </p>    
                <p class="shitpost-text text-white mb-0 pb-0">${text}</p>
                <p class="mute-white mt-1">${date}</p>
            </div>
        </div>
    </div>`;
    return temp_data;
}

const getShitPostData = async () => {
    let innerHTML_container = "";
    const shitpostdata = await fetch('https://raw.githubusercontent.com/canaryGrapher/MIST-Shitposting/master/data/shitposts.json');
    const parsedShitposts = await shitpostdata.json()
    for (let dummy_incremator = parsedShitposts.length-1; dummy_incremator >= 0; dummy_incremator--) {
        innerHTML_container += templateGenerator(parsedShitposts[dummy_incremator].date, parsedShitposts[dummy_incremator].text)
    }
    document.getElementById("post-insertion-target").innerHTML = innerHTML_container;
}


getShitPostData()