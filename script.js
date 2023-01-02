console.log("hello");

function renderSnowContainer() {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';

    document.body.appendChild(snowContainer);

    return snowContainer;
}

function renderFlake(snowContainer) {
    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake-container');

    const img = document.createElement('img');
    img.src = 'images/flake.png';

    flakeContainer.appendChild(img);

    snowContainer.appendChild(flakeContainer);

}

const snowContainer = renderSnowContainer();
renderFlake(snowContainer);
