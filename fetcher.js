const templateGenerator = (date, text) => {
    const temp_data = `<div class="text-message col-12 col-md-6 d-block mx-2 my-4">
<div class="message-date">
    <p class="font-weight-bold text-white pl-4">
        ${date}
    </p>
</div>
<div class="message-body p-2">
    <p>${text}</p>
</div>
</div>`;
    return temp_data;
}

const getShitPostData = async () => {
    let innerHTML_container = "";
    const shitpostdata = await fetch('/data/shitposts.json');
    const parsedShitposts = await shitpostdata.json()
    for (let dummy_incremator = 0; dummy_incremator < parsedShitposts.length; dummy_incremator++) {
        innerHTML_container += templateGenerator(parsedShitposts[dummy_incremator].date, parsedShitposts[dummy_incremator].text)
    }
    document.getElementById("text-holder").innerHTML = innerHTML_container;
}


getShitPostData()