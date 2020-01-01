const actionBarTool = ( btnLikeElmId, expandableElmId, timer ) => {
    // Elements
    const btnLike      = document.getElementById(btnLikeElmId);
    const expandable   = document.getElementById(expandableElmId);
    const inputTimeOut = document.getElementById('inputTimeOut');

    // Vars
    let counting = false;
    let expanded = false;
    let timeOut;

    // Actions
    const toogleExpandable = ( expandable ) => {
        if( expandable.classList.contains('expand') ){
            expandable.classList.remove('expand');
            expanded = false;
        } else {
            expandable.classList.add('expand');
            expanded = true;
        }
    };

    const checkToOpen = ( event ) => {
        event.preventDefault();
        counting = true;
        timeOut  = setTimeout( () => {
            toogleExpandable( expandable );
            counting = false;
        }, inputTimeOut.value || timer);
    };

    const hideIfShould = () => {
        if( expanded ){
            toogleExpandable( expandable );
        }
    };

    const stopCounter = () => {
        if( counting ){
            clearTimeout( timeOut );
        }
    };

    // Mouse events
    btnLike.addEventListener('mousedown',  (e) => checkToOpen(e));
    btnLike.addEventListener('mouseup', () => stopCounter());
    document.addEventListener('mousedown', (e) => hideIfShould());

    // Touch events
    btnLike.addEventListener('touchstart', (e) => checkToOpen(e));
    btnLike.addEventListener('touchend', () => stopCounter());
    document.addEventListener('touchstart', (e) => hideIfShould());
}
actionBarTool('btnLike', 'expandable', 1000);

