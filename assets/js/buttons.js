// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
// ├┴┐│ │ │  │ │ ││││└─┐
// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
// Function to print Button Cards.

const generateFirstButtonsContainer = () => {
	for (const button of CONFIG.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
		<img height="32" width="32" src="https://cdn.simpleicons.org/${button.icon}/white" />
        </a>
    `;

		const position = 'beforeend';

		buttons_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondButtonsContainer = () => {
	for (const button of CONFIG.secondButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          class="card button button__${button.id}"
        >
          <i class="buttonIcon" icon-name="${button.icon}"></i>
        </a>
    `;

		const position = 'beforeend';

		buttons_2.insertAdjacentHTML(position, item);
	}
};

const generateButtons = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstButtonsContainer();
			break;
		case 'buttons':
			generateFirstButtonsContainer();
			generateSecondButtonsContainer();
			break;
		default:
			break;
	}
};

generateButtons();
