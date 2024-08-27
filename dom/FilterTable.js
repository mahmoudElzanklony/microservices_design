export default function (inputs_selector,updateFilters) {
    let filters = '?';
    let inputs = document.querySelectorAll(inputs_selector)
    // Iterate through each input element and add keyup event listener

    inputs.forEach(input => {
        input.onkeyup = handleInputEvent;
        input.onchange = handleInputEvent;
        function handleInputEvent() {
            let filters = '?';
            inputs.forEach(input => {
                const value = input.value.trim();
                const name = input.getAttribute('name');

                if (value) {
                    filters += `${name}=${encodeURIComponent(value)}&`;
                }
            });

            filters = filters.slice(0, -1);
            updateFilters(filters);
        }

// Attach event listeners for keyup and change

    });

    //store.get_data_action(filters);
}