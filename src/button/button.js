export const showButton = () => {
    let myButton = document.createElement('button');
    myButton.className = 'my_button';
    myButton.innerText = 'Click me';
    document.body.appendChild(myButton);
}