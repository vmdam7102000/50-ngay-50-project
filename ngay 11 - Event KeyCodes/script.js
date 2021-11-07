const insert = document.getElementById("insert")


window.addEventListener("keydown", (e) =>{

    insert.innerHTML = `
    <div class="key">
            a
            <small>${e.key === ' ' ? 'Space' : e.key }</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>event.keycode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    
    `

})