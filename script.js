var TryCount = GetId('try-count');
var count = parseInt(TryCount.innerText);
var Allbutton = GetId('Allbutton');
//              All Button Number
Allbutton.addEventListener('click', GetAllButtonNumber);
//                  Submit Button
function ClickSubmitButton() {
    var GivPin = GetId('Pininput');
    var GeneratorPin = GetId('PinGenarator');
    var NoticeRight = GetId('NoticeRight');
    var NoticeWrong = GetId('NoticeWrong');
    if (count > 0 && GivPin.value!='') {
        GetId('Notice').style.display = 'block';
        if (GivPin.value == GeneratorPin.value) {
            NoticeRight.style.display = 'block';
        }
        else {
            NoticeRight.style.display = 'none';
        }
        if(GivPin.value != GeneratorPin.value) {
            NoticeWrong.style.display = 'block';
            if (count > 0) {
                count--;
                TryCount.innerText = count;
            }
        }
        else {
            NoticeWrong.style.display = 'none';
        }
        GivPin.value = '';
        GeneratorPin.value = '';
    }
    else if (GivPin.value=='') {
        GetId('Notice').style.display = 'none';
    }
    else {
        GetId('Notice').style.display = 'none';
        TryCount.innerText = 0;
    }
}


function GetAllButtonNumber(e) {
    var PininputDisplay = GetId('Pininput');
    let previous = PininputDisplay.value;
    let NewNumber = e.target.innerText;
    if (NewNumber == 'C') {
        PininputDisplay.value = '';
    }
    else if (NewNumber == 'X') {
        var x = '';
        for (var i = 0; i < previous.length - 1; i++) {
            x = x + previous[i];
        }
        PininputDisplay.value = x;
    }
    else if (NewNumber != 'Submit') {
        if (previous.length < 4) {
            previous = previous + NewNumber;
            PininputDisplay.value = previous;
        }
    }
}

//                       PinGenaratorDispaly
function NewPinDisplay() {
    var PinDisplay = GetId('PinGenarator');
    PinDisplay.value = PinGenarator();
}

function PinGenarator() {
    var NewPinGenarator = (Math.random() * 10000 + '').split('.')[0];
    if (NewPinGenarator.length == 4) {
        return NewPinGenarator;
    }
    else {
        return PinGenarator();
    }
}
//                          Get All Id
function GetId(id) {
    return document.getElementById(id);
}