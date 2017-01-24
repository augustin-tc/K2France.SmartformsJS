
function serverUpdate(controlName) {
    try {

        var control = $("[name='" + controlName + "']");

        var windowToUse = window;
        var controlPath = 'Controllers/Controller/Controls/Control[@Name=\"' + controlName + '\"]';
        var myControl = windowToUse.$sn(windowToUse.viewControllerDefinition, controlPath);
        var controlInfoObj = new windowToUse.PopulateObject(null, control.html(), myControl.getAttribute('ID'));
        windowToUse.executeControlFunction(myControl, 'SetValue', controlInfoObj);
        windowToUse.raiseEvent(myControl.getAttribute('ID'), 'Control', 'OnChange');

    }
    catch (e) {

        alert(e);

    }
}