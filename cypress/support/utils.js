export const clickUsingJS = ($element) => {
    $element.then($el => {
        $el[0].click(); 
    });
};