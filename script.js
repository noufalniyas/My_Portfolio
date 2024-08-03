document.addEventListener("DOMContentLoaded", function() {
    const pollList = document.getElementById("pollList");
    const pollItems = document.querySelectorAll(".poll-item");

    pollList.addEventListener("scroll", () => {
        const scrollTop = pollList.scrollTop;
        const clientHeight = pollList.clientHeight;
        
        pollItems.forEach((item, index) => {
            const itemTop = item.offsetTop;
            const itemHeight = item.offsetHeight;
            if (itemTop < scrollTop + clientHeight && itemTop + itemHeight > scrollTop) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    });

    // Initialize visibility on load
    const initialEvent = new Event("scroll");
    pollList.dispatchEvent(initialEvent);
});
