
window.addEventListener('DOMContentLoaded', async function () {




    const text_hours = $('.text-hours')
    const text_minutes = $('.text-minutes')
    const text_seconds = $('.text-seconds')

    function set_time () {
        let presale_end = new Date(1707696000000)
        const total = Math.floor((presale_end - new Date()) / 1000)
        const days = Math.floor(total / (60*60*24))
        const hours = Math.floor((total - days * (60*60*24)) / (60*60))
        const minutes = Math.floor((total - days * (60*60*24)-hours*(60*60)) / 60 )
        const seconds = Math.floor((total - days * (60*60*24)-hours*(60*60) -minutes*60) )
        text_hours.html(hours)
        text_minutes.html(minutes)
        text_seconds.html(seconds)
    }
    set_time()
    setInterval(set_time, 1000)


})